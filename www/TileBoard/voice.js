class VoiceRecognition {

    constructor() {
        this.hotwords = 'Hey Google'
        this.init()
    }

    async init() {
        await this.loadScript('https://cdn.jsdelivr.net/gh/xiangyuecn/Recorder@master/recorder.wav.min.js')
        await this.loadScript('https://unpkg.zhimg.com/@picovoice/porcupine-web-en-worker@1.9.4/dist/iife/index.js')
        await this.loadScript('https://unpkg.zhimg.com/@picovoice/web-voice-processor/dist/iife/index.js')
        this.startPorcupine()
        setTimeout(() => {
            this.toast(`语音助手准备好了，对我说${this.hotwords}，唤醒我吧`)
        }, 2000)
    }

    loadScript(src) {
        return new Promise((resolve) => {
            const js = document.createElement('script')
            js.src = src
            js.onload = () => {
                resolve()
            }
            document.body.appendChild(js)
        })
    }

    callService(service_name, service_data = {}) {
        let arr = service_name.split('.')
        let domain = arr[0]
        let service = arr[1]
        tileboard.api.callService(domain, service, service_data)
    }

    // 通知
    toast(message) {
        window.Noty.addObject({ title: '语音小助手', message, lifetime: 3, type: 'info' })
    }

    async startPorcupine() {
        const { hotwords } = this
        console.log('加载中，请等待...')
        const porcupineWorker = await PorcupineWebEnWorker.PorcupineWorkerFactory.create(
            [{ builtin: hotwords, sensitivity: 0.65 }]
        );
        porcupineWorker.onmessage = ({ data }) => {
            console.log(data)
            switch (data.command) {
                case 'ppn-keyword':
                    // Porcupine keyword detection
                    console.log("Porcupine detected " + data.keywordLabel);
                    this.stopPorcupine()
                    // 开始执行语音识别

                    this.initVoiceRecorder()
                    break;
                default:
                    break;
            }
        };
        try {
            const webVp = await WebVoiceProcessor.WebVoiceProcessor.init({
                engines: [porcupineWorker]
            });
            this.webVp = webVp
            this.porcupineWorker = porcupineWorker
        } catch (ex) {
            console.error(ex)
        }
    }

    stopPorcupine() {
        console.log('停止识别')
        try {
            // this.webVp.release()
            this.porcupineWorker.postMessage({ command: "release" })
        } catch (ex) {

        }
    }

    // 初始化录音
    initVoiceRecorder(flags) {
        const recorder = Recorder({ type: "wav", sampleRate: 16000 });
        recorder.open(() => {
            this.startListening()
            recorder.start();
            let step = 4
            let timer = setInterval(() => {
                step -= 1
                this.setListeningText(`正在聆听中...${step}秒`)
                if (step <= 0) {
                    clearInterval(timer)
                    // 录音结束
                    recorder.stop(async (blob, duration) => {
                        recorder.close();
                        if (duration > 2000) {
                            this.setListeningText(`正在识别中...`)
                            if (!flags) window.VOICE_RECOGNITION.startPorcupine()
                            // 上传识别
                            const body = new FormData();
                            body.append("wav", blob);
                            const res = await fetch('/xunfei-api/stt', {
                                method: 'post',
                                body
                            }).then(res => res.json())
                            if (res.code == 0) {
                                tileboard.post('/api/conversation/process', { text: res.data }).then(res => {
                                    this.toast(res.speech.plain.speech)
                                })
                            } else {
                                this.toast(res.msg)
                            }
                        } else {
                            this.toast('提示：当前录音时间没有2秒')
                        }
                        this.stopListening()
                    }, (msg) => {
                        this.toast("录音失败:" + msg);
                    });
                }
            }, 1000)
        }, (msg, isUserNotAllow) => {
            console.log((isUserNotAllow ? "UserNotAllow，" : "") + "无法录音:" + msg);
            // 如果没有权限，则显示提示
            if (isUserNotAllow) {
                this.toast('无法录音：' + msg)
            }
        });
        this.recognition = recorder
    }

    // 开始监听
    startListening() {
        const div = document.createElement('div')
        div.classList.add('conversation-voice')
        div.innerHTML = `
            <div class="conversation-voice-bg"></div>
            <div class="conversation-voice-text">正在聆听中...</div>
            <style>
                .conversation-voice{
                    position: fixed;
                    width: 100%;
                    height: 100vh;
                    left:0;top:0;
                    z-index: 100;
                }
                .conversation-voice-bg {
                    width: 100%;
                    height: 100vh;
                    position: fixed;
                    background: rgba(0, 0, 0, .8);
                }
                .conversation-voice-text {
                    color: white;
                    font-size: 20px;
                    text-align: center;
                    position: fixed;
                    top: 40%;
                    width: 100%;
                    font-size: 50px;
                }
            </style>
        `
        document.body.appendChild(div)
    }

    // 设置监听内容
    setListeningText(text) {
        document.querySelector('.conversation-voice-text').textContent = text
    }

    // 停止监听
    stopListening() {
        const cv = document.querySelector('.conversation-voice')
        if (cv) {
            cv.remove()
        }
    }
}

if (location.protocol == 'https:' && !window.VOICE_RECOGNITION) {
    window.VOICE_RECOGNITION = new VoiceRecognition()
}