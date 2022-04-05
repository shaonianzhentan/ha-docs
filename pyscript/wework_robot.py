key = '这里是机器人密钥'
import aiohttp

@service
async def wework_robot(type='markdown', message=None):
    """yaml
name: 企业微信机器人
description: 发送消息给企业微信机器人
fields:
  type:
     description: 消息类型
     example: text
     required: true
     selector:
       select:
         options:
           - text
           - markdown
           - news
           - file
           - template_card
  message:
     description: 发送的消息
     example: 测试消息
     required: true
     selector:
       text:
"""
    if message is not None:
        log.info(message)
        data = { "msgtype": type}
        if type == 'markdown':
            data.update({"markdown": { "content": message }})
        elif type == 'text':
            data.update({"text": { "content": message }})
        async with aiohttp.ClientSession() as session:
            async with session.post(f'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={key}', 
                json=data,
                headers={
                    'Content-Type': 'application/json'
                }) as response:
                log.info(response.json())