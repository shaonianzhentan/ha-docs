# 小知识

## 录屏

```bash
# 显示设备
ffmpeg -list_devices true -f dshow -i dummy

# 录制桌面（30帧）
ffmpeg -f gdigrab -framerate 30 -i desktop -f mp4 -vcodec mpeg4 output.mp4

# 录制桌面+声音
ffmpeg -f gdigrab -framerate 15 -i desktop -f dshow -i audio="麦克风阵列 (Realtek(R) Audio)" -f mp4 -vcodec mpeg4 output.mp4

# 指定不同的录音设备
ffmpeg -f gdigrab -framerate 15 -i desktop -f dshow -i audio="耳机 (EDIFIER W800BT Hands-Free AG Audio)" -f mp4 -vcodec mpeg4 output.mp4

# 因为4k导致手机无法播放，所以需要缩放至1080p
#（-vf scale=1920:1080,setsar=1:1 ）
ffmpeg -f gdigrab -framerate 15 -i desktop -f dshow -i audio="麦克风阵列 (Realtek(R) Audio)" -f mp4 -vcodec mpeg4 -vf scale=1920:1080,setsar=1:1 output.mp4

```
- https://trac.ffmpeg.org/wiki/Capture/Desktop

## 查看运行日志
```bash
# 实时查看服务日志
journalctl -u home-assistant@pi.service -f
```

## 使用curl发送HTTP请求
```bash
curl -X POST -H "Authorization: Bearer 令牌凭据" \
  -H "Content-Type: application/json;charset=GBK" \
  -d '{"text": "切换彩灯"}' \
  http://192.168.1.101:8123/api/services/conversation/process
```
!> 注意：各个系统换行符标识`\`可能会有区别，在运行时一定要注意

## 网站收集

> 文件临时下载
- https://d.serctl.com/
- http://toolwa.com/github/
- https://gh.api.99988866.xyz/
- https://ghproxy.com/
- http://gitd.cc/
- https://github.zhlh6.cn/

## Android通知转发

> 标题`title: %TITLE`，内容`content: $CONTENT`
- https://www.coolapk.com/apk/com.example.junnan.xiaozhuanfa

!> URL地址：http://192.168.1.101:8123/api/webhook/123456 ，这里的`123456`是自动化里配置的

> 配置自动化
```yaml
- id: '1616035392522'
  alias: Android通知转发地址
  description: ''
  trigger:
  - platform: webhook
    webhook_id: '123456'
  condition: []
  action:
  - service: persistent_notification.create
    data:
      message: '{% for key in  trigger.data -%}{{ key }}:{{ trigger.data[key] }},{%- endfor %}'
  mode: single
```

## 解决HACS下载很慢的问题

> hacs/helpers/functions/download.py `_LOGGER.debug("Downloading %s", url)`
```python
    if "https://raw.githubusercontent.com" in url:
        arr = url.replace("https://raw.githubusercontent.com/", "").split('/')
        arr[1] = arr[1] + '@' + arr[2]
        arr[2] = ''
        _list = ["https://cdn.jsdelivr.net/gh"]
        for item in arr:
            if item != '':
                _list.append(item)
        url = '/'.join(_list)
        _LOGGER.debug("下载链接： %s", url)
```

## 启动ssh服务 
```bash
sudo service ssh start
```

## 3DES加解密
```python
import pyDes, base64

class EncryptHelper:

    def __init__(self, key, iv) -> None:
        self.key = base64.decodebytes(key.encode('utf-8'))
        self.iv = base64.decodebytes(iv.encode('utf-8'))

    def Encrypt(self, data):
        k = pyDes.triple_des(self.key, pyDes.CBC, padmode=pyDes.PAD_PKCS5, IV=self.iv)
        d = k.encrypt(data)
        return str(base64.b64encode(d), encoding="utf-8")

    def Decrypt(self, data):
        k = pyDes.triple_des(self.key, pyDes.CBC, padmode=pyDes.PAD_PKCS5, IV=self.iv)        
        d = k.decrypt(base64.b64decode(data))
        return d.decode()

helper = EncryptHelper("qJzGEh6hESZDVJeCnFPGuxzaiB7NLQM5", "andyliu1234=")
oldValue = "13800138000"
newValue = helper.Encrypt(oldValue)
print("加密：" + newValue)
print("解密：" + helper.Decrypt(newValue))
```

```js
const crypto = require('crypto')

class EncryptHelper {
    constructor(key, iv) {
        this.key = Buffer.from(key, "base64")
        this.iv = Buffer.from(iv, "base64")
    }

    Encrypt(plaintext) {
        var cipher = crypto.createCipheriv('des-ede3-cbc', this.key, this.iv);
        var ciph = cipher.update(plaintext, 'utf8', 'base64');
        ciph += cipher.final('base64');
        return ciph
    }

    Decrypt(ciph) {
        var decipher = crypto.createDecipheriv('des-ede3-cbc', this.key, this.iv);
        var txt = decipher.update(ciph, 'base64', 'utf8');
        txt += decipher.final('utf8');
        return txt
    }
}


const helper = new EncryptHelper("qJzGEh6hESZDVJeCnFPGuxzaiB7NLQM5", "andyliu1234=")
//加密
var oldValue = "13800138000";
//print
var newValue = helper.Encrypt(oldValue);
console.log("加密后:" + newValue);
console.log('vi3iTVhk4AJ+GSNeeP3MtQ==')
//解密
var desValue = helper.Decrypt(newValue);

console.log("解密后:" + desValue);
```

```csharp
// See https://aka.ms/new-console-template for more information
using System.Net;
using System.Reflection.PortableExecutable;
using System;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Security.Cryptography;

EncryptHelper helper = new EncryptHelper("qJzGEh6hESZDVJeCnFPGuxzaiB7NLQM5", "andyliu1234=");
//加密
string oldValue = "13800138000";
//print
string newValue = helper.Encrypt(oldValue);
Console.WriteLine("加密后:" + newValue);
//解密
string desValue = helper.Decrypt(newValue);
//
Console.WriteLine("解密后:" + desValue);
Console.ReadLine();

/// <summary>
/// 加解密类
/// </summary>
public class EncryptHelper
{
    public string Key { get; set; }
    public string IV { get; set; }
    //构造一个对称算法
    private SymmetricAlgorithm mCSP = TripleDES.Create();

    /// <summary>
    /// 
    /// </summary>
    /// <param name="key">密钥，必须32位</param>
    /// <param name="iv">向量，必须是12个字符</param>
    public EncryptHelper(string key, string iv)
    {
        this.Key = key;
        this.IV = iv;
    }

    /// <summary>
    /// 字符串的加密
    /// </summary>
    /// <param name="Value">要加密的字符串</param>
    /// <returns>加密后的字符串</returns>
    public string Encrypt(string Value)
    {
        try
        {
            ICryptoTransform ct;
            MemoryStream ms;
            CryptoStream cs;
            byte[] byt;
            mCSP.Key = Convert.FromBase64String(this.Key);
            mCSP.IV = Convert.FromBase64String(this.IV);
            ct = mCSP.CreateEncryptor(mCSP.Key, mCSP.IV);//创建加密对象
            byt = Encoding.UTF8.GetBytes(Value);
            ms = new MemoryStream();
            cs = new CryptoStream(ms, ct, CryptoStreamMode.Write);
            cs.Write(byt, 0, byt.Length);
            cs.FlushFinalBlock();
            cs.Close();

            return Convert.ToBase64String(ms.ToArray());
        }
        catch (Exception ex)
        {
            //MessageBox.Show(ex.Message, "出现异常", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            return ("Error in Encrypting " + ex.Message);
        }
    }

    /// <summary>
    /// 解密字符串
    /// </summary>
    /// <param name="Value">加密后的字符串</param>
    /// <returns>解密后的字符串</returns>
    public string Decrypt(string Value)
    {
        try
        {
            ICryptoTransform ct;//加密转换运算
            MemoryStream ms;//内存流
            CryptoStream cs;//数据流连接到数据加密转换的流
            byte[] byt;
            //将3DES的密钥转换成byte
            mCSP.Key = Convert.FromBase64String(this.Key);
            //将3DES的向量转换成byte
            mCSP.IV = Convert.FromBase64String(this.IV);
            ct = mCSP.CreateDecryptor(mCSP.Key, mCSP.IV);//创建对称解密对象
            byt = Convert.FromBase64String(Value);
            ms = new MemoryStream();
            cs = new CryptoStream(ms, ct, CryptoStreamMode.Write);
            cs.Write(byt, 0, byt.Length);
            cs.FlushFinalBlock();
            cs.Close();

            return Encoding.UTF8.GetString(ms.ToArray());
        }
        catch (Exception ex)
        {
            //MessageBox.Show(ex.Message, "出现异常", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            return ("Error in Decrypting " + ex.Message);
        }
    }

}
```