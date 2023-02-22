# Python学习笔记

## 压缩文件
```py
import zipfile, tempfile, time, os

'''
root_path: 压缩目录
filter_dir: 过滤目录
filter_name: 全局过滤名称
'''
def zip(root_path, filter_dir=None, filter_name=None):
    # 临时目录
    tmpdir = tempfile.gettempdir()
    # print(tmpdir)
    # 压缩文件
    zf = os.path.join(tmpdir, time.strftime('%y_%m_%d_%H%M%S',time.localtime(time.time())) + ".zip")
    with zipfile.ZipFile(zf, 'w', zipfile.ZIP_DEFLATED) as zip:
        # 遍历文件
        for file_name in os.listdir(root_path):
                file_path = os.path.join(root_path, file_name)
                # 压缩目录
                if os.path.isdir(file_path):
                    for path, dirnames, filenames in os.walk(file_path):
                        # 去掉目标跟路径，只对目标文件夹下边的文件及文件夹进行压缩
                        fpath = path.replace(root_path, '')
                        # 格式化文件名称（斜杠转义）
                        format_name = fpath.replace('\\', '/').strip('/')
                        # 过滤的文件
                        if filter_dir is not None and len(list(filter(lambda x: format_name.startswith(x), filter_dir))) > 0:
                            continue
                        # 全局过滤
                        if filter_name is not None and len(list(filter(lambda x: x in format_name, filter_name))) > 0:
                            continue
                        print('压缩目录：' + format_name)
                        for filename in filenames:
                            zip.write(os.path.join(path, filename), os.path.join(fpath, filename))
                else:
                    zip.write(file_path, file_name)
    return zf
```


## 时间格式
```py
import datetime

now = datetime.datetime.now()
print(now.isoformat())
# 2022-04-05T12:09:36.423514
print(now.replace(microsecond=0).isoformat())
# 2022-04-05T12:09:36

print('当前时间', now.strftime('%Y-%m-%d %H:%M:%S'))
# 2022-04-16 15:56:24

s = '2022-04-10T18:44:09+00:00'
dt = datetime.datetime.fromisoformat(s)

s = '2022-04-10 18:44:09'
dt = datetime.strptime(s, '%Y-%m-%d %H:%M:%S')

# 日期加减
now = now + datetime.timedelta(seconds=+300)
print(now.strftime('%Y-%m-%d %H:%M:%S'))
```

```py
import time

t = time.time()

print('秒', int(t))
# 秒 1650094683
print('毫秒', int(round(t * 1000)))
# 毫秒 1650094683777
print('微秒', int(round(t * 1000000)))
# 微秒 1650094683777255

today = time.localtime()
print('字符串', time.strftime('%Y-%m-%d %H:%M:%S', today))
# 2022-04-16 15:38:03

# 转时间结构
datetime_str = '2022-04-16 15:38:03'
dt = time.strptime(datetime_str, '%Y-%m-%d %H:%M:%S')
print('时间结构', dt)
# time.struct_time(tm_year=2022, tm_mon=4, tm_mday=16, tm_hour=15, tm_min=38, tm_sec=3, tm_wday=5, tm_yday=106, tm_isdst=-1)
print('年', dt.tm_year)
```

## 集合过滤
```py
inputs = [
    {
        'count': 1
    },
    {
        'count': 3
    },
    {
        'count': 2
    }
]

result = [x for x in inputs if x['count'] > 2]
print(result)
# [{'count': 3}]
```

## URL解析
```py
from urllib.parse import urlparse

url = 'rtsp://admin:password@192.168.1.123:554/onvif1'
parsed = urlparse(url)
print('scheme  :', parsed.scheme)
print('netloc  :', parsed.netloc)
print('path    :', parsed.path)
print('params  :', parsed.params)
print('query   :', parsed.query)
print('fragment:', parsed.fragment)
print('username:', parsed.username)
print('password:', parsed.password)
print('hostname:', parsed.hostname)
print('port    :', parsed.port)
```

## 视频处理
```py
import av
source = 'rtsp://admin:password@192.168.1.123:554/onvif2'
options = {'rtsp_flags': 'prefer_tcp', 'stimeout': '5000000', 'rtsp_transport': 'udp'}
SOURCE_TIMEOUT = 30
container = av.open(source, options=options, timeout=SOURCE_TIMEOUT)
video_stream = container.streams.video[0]
print(video_stream)
count = 0
for frame in container.decode(video=0):
    count = count + 1
    if count > 30:
        frame.to_image().save('frame-%04d.jpg' % frame.index)
        break
```

视频帧转字节流
```py
import av, io

def camera_image(source, options) -> bytes | None:
    SOURCE_TIMEOUT = 30
    container = av.open(source, options=options, timeout=SOURCE_TIMEOUT)
    count = 0
    for frame in container.decode(video=0):
        count = count + 1
        if count > 30:
            imgByteArr = io.BytesIO()
            frame.to_image().save(imgByteArr, format='JPEG')
            return imgByteArr.getvalue()
```

## 执行异步方法
```py
import _thread, time, asyncio

def async_create_task(tasks):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(asyncio.gather(*tasks))

async def test(a):
    print(a)

_thread.start_new_thread(async_create_task, ([test(1)],))
time.sleep(5)
```