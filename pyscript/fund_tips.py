import aiohttp, json, asyncio, datetime

async def getFund(code):
    async with aiohttp.ClientSession() as session:
        async with session.get(f'http://fundgz.1234567.com.cn/js/{code}.js') as response:
            res = response.text()
            jsonStr = res.replace('jsonpgz(', '').replace(');','')
            return json.loads(jsonStr)

def send_message(message):
    service.call("pyscript", "wework_robot", type='markdown', message=message)

@time_trigger("once(14:40:00)")
async def autotips_fund():
    # 光伏C
    obj = getFund('011103')
    log.info(obj)
    gszzl = float(obj['gszzl'])
    if gszzl > 0:
        send_message(f'''
        > **蕙花**【宋 赵孟坚】
        > `光风荡暖暖晴天，雅有幽香入简编`
        > **望月怀远**【唐 张九龄】
        > `海上生明月，天涯共此时`''')
    else:
        send_message(f'''
        > **相逢行二首·其一**【唐 李白】
        > <font color="info">光景不待人，须臾发成丝</font>
        > **离骚**【楚 屈原】
        > <font color="info">伏清白以死直兮，固前圣之所厚</font>''')