# Mono For Android

## 系统浮动窗口
```csharp
WindowManagerLayoutParams layoutParams = new WindowManagerLayoutParams();
// 判断当前Android系统版本
if (Build.VERSION.SdkInt >= BuildVersionCodes.M)
{
    layoutParams.Type = WindowManagerTypes.ApplicationOverlay;
}
else
{
    layoutParams.Type = WindowManagerTypes.SystemOverlay;
}
layoutParams.Format = Format.Rgba8888;
layoutParams.Gravity = GravityFlags.Left | GravityFlags.Top;
layoutParams.Flags = WindowManagerFlags.NotTouchModal | WindowManagerFlags.NotFocusable;
// 窗口的宽高和位置
layoutParams.Width = 300;
layoutParams.Height = 100;
layoutParams.X = 0;
layoutParams.Y = 0;
// 生成一个按钮
Button pixButton = new Button(this.ApplicationContext);
pixButton.Text = System.DateTime.Now.ToString("HH:mm:ss");
pixButton.SetBackgroundColor(Color.Argb(200, 0, 0, 0));
pixButton.SetTextColor(Color.Red);
WindowManager.AddView(pixButton, layoutParams);
```

## 主线程定时
```csharp
// 定时器（每5秒执行一次）
Timer timer = new Timer((state) => {
    // 在UI线程运行
    this.RunOnUiThread(() =>
    {
        // 判断客户端是否启动
        if (mqttClient != null)
        {
            // 当前连接中，则进行上报状态
            if (mqttClient.IsConnected)
            {
                // 上报信息
            }
            else
            {
                // 客户端重连
            }
        }
    });
}, null, 0, 5000);
```

## 设备信息
```csharp
// 序列号
Android.OS.Build.Serial;
// 手机型号
Android.OS.Build.Model;

// 电量
Intent intent = new ContextWrapper(this).RegisterReceiver(null, new IntentFilter(Intent.ActionBatteryChanged));
int battery = intent.GetIntExtra(BatteryManager.ExtraLevel, -1) * 100 / intent.GetIntExtra(BatteryManager.ExtraScale, -1);
```

### 屏幕亮度
```csharp
// 屏幕亮度
int brightness = Settings.System.GetInt(this.ContentResolver, Settings.System.ScreenBrightness);
// 屏幕亮度设置
int brightness = 11;
Settings.System.PutInt(this.ContentResolver, Settings.System.ScreenBrightness, brightness);
```

### 音频管理
```csharp
// 音频管理
AudioManager audioManager = this.GetSystemService(Context.AudioService) as AudioManager;
// 音乐音量
int musicVolume = audioManager.GetStreamVolume(Stream.Music);
// 设置音量到最大
int musicVolume = audioManager.GetStreamMaxVolume(Android.Media.Stream.Music);
audioManager.SetStreamVolume(Stream.Music, musicVolume, VolumeNotificationFlags.PlaySound);

// 系统音量
int systemVolume = audioManager.GetStreamVolume(Stream.System);
// 设置音量到最大
int systemVolume = audioManager.GetStreamMaxVolume(Android.Media.Stream.System);
audioManager.SetStreamVolume(Stream.System, systemVolume, VolumeNotificationFlags.PlaySound);

// 闹钟音量
int alarmVolume = audioManager.GetStreamVolume(Stream.Alarm);
// 设置音量到最大
int alarmVolume = audioManager.GetStreamMaxVolume(Android.Media.Stream.Alarm);
audioManager.SetStreamVolume(Stream.Alarm, alarmVolume, VolumeNotificationFlags.PlaySound);

```

### WiFi管理
```csharp
// WiFi管理
WifiManager wifiManager = this.GetSystemService(Context.WifiService) as WifiManager;
WifiInfo wifiInfo = wifiManager.ConnectionInfo;
// 名称
wifiInfo.SSID.Trim('"');
// 信号
wifiInfo.Rssi.ToString();
// IP地址
wifiInfo.IpAddress.ToString();
// MAC地址
wifiInfo.MacAddress;
```

### 本机IP地址
```csharp
string ip = System.Net.NetworkInformation.NetworkInterface.GetAllNetworkInterfaces()
                .Select(p => p.GetIPProperties())
                .SelectMany(p => p.UnicastAddresses)
                .Where(p => p.Address.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork && !System.Net.IPAddress.IsLoopback(p.Address))
                .FirstOrDefault()?.Address.ToString();
```

## 文本转语音TTS
```csharp
void Speak(string value){
    // 主线程异步调用方法
    MainThread.BeginInvokeOnMainThread(async () => {
        await Xamarin.Essentials.TextToSpeech.SpeakAsync(value);
    });
}
```

## 录音
```csharp
// 开始录音
string StartRecord(){
    int bufferSizeInBytes = AudioRecord.GetMinBufferSize(16000, ChannelIn.Mono, Encoding.Pcm16bit);
    AudioRecord audioRecord = new AudioRecord(AudioSource.Mic, 16000, ChannelIn.Mono, Encoding.Pcm16bit, bufferSizeInBytes);
    // 开始录音
    audioRecord.StartRecording();
    int readsize = 0;
    byte[] audiodata = new byte[bufferSizeInBytes];
    // 创建pcm文件
    Java.IO.File audioFile = Java.IO.File.CreateTempFile("record_", ".pcm");
    string audioFilePath = audioFile.AbsolutePath;
    Java.IO.FileOutputStream fos = new Java.IO.FileOutputStream(audioFilePath);
    // 当前时间
    System.DateTime today = System.DateTime.Now;
    // 录音5秒
    while (System.DateTime.Now.Subtract(today).TotalSeconds > 5)
    {
        readsize = audioRecord.Read(audiodata, 0, bufferSizeInBytes);
        if (-3 != readsize)
        {
            try
            {
                fos.Write(audiodata);
            }
            catch (IOException ioEx)
            {
                // log(ioEx.Message);
            }
        }
    }
    return audioFilePath;
}
```

## 百度语音识别
```csharp
// 传入pcm录音文件
string RecognizeText(string filePath)
{
    // 使用百度语音识别
    var ai = new Baidu.Aip.Speech.Asr("17944158", "HLhr7GE05bY0gAzalObMHtUE", "fzFiBnLYKSMeFddsDGVZBnsyV0O0WACT");
    ai.Timeout = 60000;
    var data = File.ReadAllBytes(filePath);
    // 可选参数
    var options = new Dictionary<string, object>();
    options.Add("dev_pid", 1537);
    ai.Timeout = 120000; // 若语音较长，建议设置更大的超时时间. ms
    var result = ai.Recognize(data, "pcm", 16000, options);
    if (System.Convert.ToInt32(result["err_no"]) == 0)
    {
        return result["result"][0].ToString();
    }
    return "";
}
```

## MQTT连接
```csharp
async void ConnectMQTT(string host, int port = 1883)
{
    string clientId = System.Guid.NewGuid().ToString();
    // 设置主题
    string topic_set = $"android/{Android.OS.Build.Serial}/set".ToLower();
    // 信息主题
    string topic_info = $"android/{Android.OS.Build.Serial}/info".ToLower();
    // 定义配置信息
    var options = new MqttClientOptionsBuilder()
        .WithClientId(clientId)
        .WithCleanSession(true)
        .WithWillDelayInterval(5)
        .WithTcpServer(host, port);
    // 创建MQTT客户端
    var factory = new MqttFactory();
    mqttClient = factory.CreateMqttClient();
    // 连接成功事件
    mqttClient.UseConnectedHandler((action) =>
    {
        // 订阅设置主题
        mqttClient.SubscribeAsync(topic_set);
        // 发送连接状态
        mqttClient.PublishAsync(topic_info, "这里是要发送的消息");
    });
    // 断开连接事件
    mqttClient.UseDisconnectedHandler((action) =>
    {
        // 连接中断了啊
    });
    // 消息接收事件
    mqttClient.UseApplicationMessageReceivedHandler(e =>
    {
        // 获取当前消息主题
        string topic = e.ApplicationMessage.Topic;
        // 获取当前消息内容
        string payload = e.ApplicationMessage.Payload == null ? "" : System.Text.Encoding.UTF8.GetString(e.ApplicationMessage.Payload);
        // 判断是否为设置主题
        if (topic == topic_set)
        {
            // 这里进行数据设置
        }
    });
    // 开始连接...
    await mqttClient.ConnectAsync(options.Build(), CancellationToken.None);
}
```

## JSON转换
```csharp
// 字典对象转字符串
Dictionary<string, object> dict = new Dictionary<string, object>();
dict.Add("update_time", System.DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
string jsonStr = JsonConvert.SerializeObject(dict);

// json字符串转字典
Dictionary<string, object> dict = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsonStr);
```