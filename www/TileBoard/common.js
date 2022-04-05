var tileboard = {
    api: null,
    loadScript: function (src) {
        return new Promise(function (resolve) {
            var js = document.createElement('script')
            js.src = src
            js.onload = () => {
                resolve()
            }
            document.body.appendChild(js)
        })
    },
    // 天气信息
    weather: {
        'clear-day': { name: '晴天', icon: 'clear' },
        'clear-night': { name: '夜间晴朗', icon: 'nt-clear' },
        'cloudy': { name: '阴', icon: 'cloudy' },
        'exceptional': { name: '特殊', icon: 'unknown' },
        'fog': { name: '雾', icon: 'fog' },
        'hail': { name: '冰雹', icon: 'sleet' },
        'lightning': { name: '雷电', icon: 'chancestorms' },
        'lightning-rainy': { name: '雷阵雨', icon: 'tstorms' },
        'partlycloudy': { name: '多云', icon: 'partlycloudy' },
        'partly-cloudy-day': { name: '多云', icon: 'partlycloudy' },
        'partly-cloudy-night': { name: '夜间多云', icon: 'nt-partlycloudy' },
        'pouring': { name: '暴雨', icon: 'rain' },
        'snowy': { name: '雪', icon: 'snow' },
        'snowy-rainy': { name: '雨夹雪', icon: 'sleet' },
        'sunny': { name: '晴', icon: 'sunny' },
        'rainy': { name: '雨', icon: 'sleet' },
        'wind': { name: '微风', icon: 'unknown' },
        'windy': { name: '风', icon: 'unknown' },
        'windy-variant': { name: '大风', icon: 'unknown' }
    },
    audio: new Audio(),
    // 事件
    events: [
        {
            command: 'audio',
            action: function (e) {
                var config = tileboard.search('config')
                if (e.config !== config) {
                    return
                }
                var audio = tileboard.audio
                if (e.url) {
                    let url = e.url
                    if (location.protocol === 'https:') {
                        url = url.replace('http://', 'https://')
                    }
                    audio.src = url
                    audio.play()
                }
                // 播放音乐
                switch (e.type) {
                    case 'play':
                        audio.play()
                        break;
                    case 'pause':
                        audio.pause()
                        break;
                    case 'reload':
                        if (audio.src) {
                            audio.currentTime = 0
                            audio.play()
                        }
                        break;
                    case 'volume_up':
                        if (audio.volume < 1) {
                            audio.volume += 0.1
                        }
                        break;
                    case 'volume_down':
                        if (audio.volume > 0.1) {
                            audio.volume -= 0.1
                        }
                        break;
                    case 'volume_set':
                        var volume = e.volume
                        if (!isNaN(volume) && volume >= 0 && volume <= 100) {
                            audio.volume = volume / 100
                        }
                        break;
                }
            }
        },
        {
            command: 'tts',
            action: function (e) {
                if (e.text) {
                    tileboard.speak(e.text)
                }
            }
        },
        {
            command: 'refresh_page',
            action: function (e) {
                location.reload()
            }
        },
        {
            command: 'screen_saver',
            action: function (e) {
                window.showScreensaver()
            }
        },
        {
            command: 'fullscreen',
            action: function (e) {
                document.documentElement.requestFullscreen()
            }
        },
        {
            command: 'exit_fullscreen',
            action: function (e) {
                document.exitFullscreen()
            }
        },
        {
            command: 'clear_notify',
            action: function (e) {
                window.Noty.removeAll()
            }
        },
        {
            command: 'notify',
            action: function (e) {
                window.Noty.addObject(e);
            }
        }
    ],
    // 参数设置
    search: function (key, value) {
        var queryString = {}
        var vars = location.search.substring(1).split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            queryString[pair[0]] = pair[1]
        }
        if (value) {
            queryString[key] = value
            var arr = []
            for (var k in queryString) {
                arr.push(k + '=' + queryString[k])
            }
            location.search = '?' + arr.join('&')
        } else {
            return queryString[key]
        }
    },
    recognition: function () {

    },
    speak: function (text) {
        var synth = window.speechSynthesis;
        var utterThis = new SpeechSynthesisUtterance(text);
        var voices = synth.getVoices();
        utterThis.voice = voices[0];
        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
    },
    onReady: function (t) {
        tileboard.api = t.api
    },
    post: function (url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: 'Bearer ' + tileboard.api._token
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}

// 天气信息
var weatherIcon = {}
var weatherName = {}
for (var k in tileboard.weather) {
    var weather = tileboard.weather[k]
    weatherIcon[k] = weather.icon
    weatherName[k] = weather.name
}