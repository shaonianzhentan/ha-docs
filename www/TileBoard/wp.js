// 合并事件
Array.prototype.push.apply(tileboard.events, [

]);

var CONFIG = {
    customTheme: CUSTOM_THEMES[tileboard.search('theme')], // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
    transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
    entitySize: ENTITY_SIZES.SMALL, //SMALL, BIG are available
    tileSize: 100,
    tileMargin: 6,
    serverUrl: location.protocol + '//' + location.host,
    wsUrl: (location.protocol === 'http:' ? 'ws' : 'wss') + '://' + location.host + '/api/websocket',
    authToken: null,
    //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
    //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
    debug: false, // Prints entities and state change info to the console.
    pingConnection: true, //ping connection to prevent silent disconnections
    locale: 'zh-cn', // locale for date and number formats - available locales: it, de, es, fr, pt, ru, nl, pl, en-gb, en-us (default). See readme on adding custom locales.
    // next fields are optional
    events: tileboard.events,
    timeFormat: 24,
    menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
    hideScrollbar: false, // horizontal scrollbar
    groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // HORIZONTALLY, VERTICALLY, GRID
    onReady: function () {
    },

    header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
    },

    screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
        timeout: 300, // after 5 mins of inactive
        slidesTimeout: 10, // 10s for one slide
        styles: { fontSize: '40px' },
        leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
        slides: [
            { bg: 'https://pic.downk.cc/item/5ec331eec2a9a83be54d84f4.jpg' },
            { bg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.soumeitu.com%2Fwp-content%2Fuploads%2F2020%2F03%2F5e830ed47bb5e.jpg&refer=http%3A%2F%2Fwww.soumeitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628513217&t=75c6c9e5ec86214d4cee93375b0d3e47' },
            { bg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-27%2F5a1ba6c832230.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628513217&t=8a5fb766c4ab6dc6af4ab930c0e3fe96' },
            {
                bg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F59acbb7762c18.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628595163&t=d2e933baff73aab89dc22f2ff8fdf70a'
            }
        ]
    },

    pages: [
        {
            title: '主页',
            bg: './images/bg1.jpeg',
            icon: 'mdi-home-outline', // home icon
            groups: [
                {
                    title: '生活信息 - 媒体中心',
                    width: 3,
                    height: 3,
                    // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
                    items: [
                        {
                            // please read README.md for more information
                            // this is just an example
                            position: [0, 0],
                            height: 2, // 1 for compact
                            //classes: ['-compact'],
                            type: TYPES.WEATHER,
                            id: 'weather.wo_de_jia',
                            // state: function () {return 'Clear, night'},
                            icon: '&weather.wo_de_jia.state',
                            title: '上海',
                            icons: weatherIcon,
                            states: weatherName,
                            fields: {
                                temperature: '&weather.wo_de_jia.attributes.temperature',
                                temperatureUnit: '°C',
                                humidity: '&weather.wo_de_jia.attributes.humidity',
                                humidityUnit: '%',
                            }
                        },
                        {
                            position: [1, 0],
                            width: 2,
                            type: TYPES.TEXT_LIST,
                            id: {}, // using empty object for an unknown id
                            state: false, // disable state element
                            list: [
                                {
                                    title: '客厅温度',
                                    icon: 'mdi-clock-outline',
                                    value: '&sensor.lywsdcgq_temperature.state',
                                    unit: ' °C',
                                },
                                {
                                    title: '主卧温度',
                                    icon: 'mdi-clock-outline',
                                    value: '&sensor.lywsdcgq_temperature.state',
                                    unit: ' °C',
                                },
                                {
                                    title: '次卧温度',
                                    icon: 'mdi-clock-outline',
                                    value: '&sensor.lywsdcgq_temperature.state',
                                    unit: ' °C',
                                },
                                {
                                    title: '客厅湿度',
                                    icon: 'mdi-clock-outline',
                                    value: '&sensor.lywsdcgq_humidity.state',
                                    unit: ' %',
                                },
                            ]
                        },
                        {
                            position: [1, 1],
                            width: 2,
                            type: TYPES.TEXT_LIST,
                            id: {}, // using empty object for an unknown id
                            state: false, // disable state element
                            list: [
                                {
                                    title: '门口',
                                    icon: 'mdi-walk',
                                    value: 'off'
                                },
                                {
                                    title: '玄关',
                                    icon: 'mdi-walk',
                                    value: 'off'
                                },
                                {
                                    title: '阳台',
                                    icon: 'mdi-walk',
                                    value: 'off'
                                },
                                {
                                    title: '卫生间',
                                    icon: 'mdi-walk',
                                    value: '&binary_sensor.lumi_lumi_sensor_motion_3876d103_ias_zone.state'
                                },
                            ],
                            filter: function (value) {
                                // console.log(value)
                                switch (value) {
                                    case 'on': return '有人';
                                    case 'off': return '没人';
                                    default: return value;
                                }
                            }
                        },
                        {
                            position: [0, 2],
                            width: 2,
                            id: 'media_player.yun_yin_le',
                            type: TYPES.MEDIA_PLAYER,
                            hideSource: false,
                            hideMuteButton: true,
                            state: false,
                            //state: '@attributes.media_title',
                            title: '@attributes.media_title',
                            // bgSuffix: '@attributes.entity_picture',
                        },
                        {
                            position: [2, 2],
                            type: TYPES.SCRIPT,
                            id: 'script.wang_yi_dian_tai_song_yu_xuan_du',
                            state: false,
                            icon: 'mdi-music',
                        }
                    ]
                },

                {
                    title: '场景模式',
                    width: 2,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-movie-roll',
                            title: '观影模式',
                        },
                        {
                            position: [1, 0],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-home-import-outline',
                            title: '回家模式',
                        },
                        {
                            position: [0, 1],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-account-music',
                            title: '音乐模式',
                        },
                        {
                            position: [1, 1],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-account-clock',
                            title: '休闲模式',
                        },
                        {
                            position: [0, 2],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-account-group',
                            title: '会客模式',
                        },
                        {
                            position: [1, 2],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-account-lock',
                            title: '私密模式',
                        }
                    ]
                },

                {
                    title: '离家',
                    width: 1,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-home-export-outline',
                            title: '离家模式',
                        },
                        {
                            position: [0, 1],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-home-search',
                            title: '检测设备状态',
                        },
                        {
                            position: [0, 2],
                            id: {},
                            type: TYPES.SCRIPT,
                            state: false,
                            icon: 'mdi-close-network',
                            title: '关闭所有设备',
                        }

                    ]
                },
                {
                    title: '摄像监控',
                    width: 2,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            id: 'camera.wo_de_ping_ban',
                            type: TYPES.CAMERA,
                            bgSize: 'cover',
                            width: 2,
                            height: 2,
                            state: false,
                            fullscreen: {
                                type: TYPES.CAMERA,
                                objFit: 'scale-down',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                                id: 'camera.wo_de_ping_ban',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
                                bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
                            },
                            refresh: 1500,  // can be number in milliseconds
                            refresh: function () {  // can also be a function
                                return 3000 + Math.random() * 1000
                            }
                        }
                    ]
                }
            ]
        },

        {
            title: '设置',
            bg: './images/bg3.jpg',
            icon: 'mdi-collage',
            groups: [


                {
                    title: '客厅 - 阳台',
                    width: 3,
                    height: 3,
                    // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '吸顶灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [1, 0],
                            type: TYPES.LIGHT,
                            id: 'light.theater_lights',
                            title: '筒灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },

                        {
                            position: [1, 1],
                            type: TYPES.SWITCH,
                            id: 'switch.sonoff_1001307c6b',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-camera",
                                off: "mdi-camera-off",
                            }
                        },
                        {
                            position: [2, 0],
                            type: TYPES.SWITCH,
                            title: '镜前灯',
                            id: 'switch.sonoff_1000b22946',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [2, 1],
                            type: TYPES.SWITCH,
                            id: 'light.xiao_mi_deng_pao',
                            title: '阳台灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [0, 2],
                            width: 2,
                            id: 'media_player.xiao_mi_dian_shi',
                            type: TYPES.MEDIA_PLAYER,
                            hideSource: false,
                            state: false,
                            //state: '@attributes.media_title',
                            subtitle: '@attributes.media_title',
                            // bgSuffix: '@attributes.entity_picture',
                        },
                        {
                            position: [2, 2],
                            type: TYPES.CUSTOM,
                            title: '播放历史记录',
                            id: {},
                            icon: 'mdi-movie',
                            state: '小米电视',
                            action: function (item, entity) {

                            }
                        },
                    ]
                },


                {
                    title: '餐厅 - 厨房',
                    width: 2,
                    height: 3,
                    // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '吸顶灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [1, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '筒灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [0, 1],
                            type: TYPES.SWITCH,
                            //id: "switch.lights",
                            id: { state: 'off' },
                            title: '厨房灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [1, 1],
                            type: TYPES.SWITCH,
                            //id: "switch.lights",
                            id: { state: 'off' },
                            title: '阳台灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },

                    ],
                },


                {
                    title: '主卧',
                    width: 2,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '吸顶灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [1, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '筒灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [0, 1],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '飘窗灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [1, 1],
                            type: TYPES.SWITCH,
                            title: '主卫灯',
                            id: 'switch.sonoff_1000b22946',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                    ]
                },


                {
                    title: '次卧',
                    width: 2,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '吸顶灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [1, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '筒灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                    ]
                },



                {
                    title: '书房',
                    width: 2,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '吸顶灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [1, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '筒灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                    ]
                },


                {
                    title: '玄关',
                    width: 1,
                    height: 3,
                    // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.LIGHT,
                            id: 'light.xiao_mi_deng_pao',
                            title: '筒灯',
                            states: {
                                on: "开",
                                off: "关"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            }
                        },
                        {
                            position: [0, 1],
                            type: TYPES.LOCK,
                            id: { state: 'locked' },
                            title: '大门',
                            states: {
                                locked: "Locked",
                                unlocked: "Unlocked"
                            },
                            icons: {
                                locked: "mdi-lock",
                                unlocked: "mdi-lock-open",
                            }
                        },

                        {
                            position: [0, 2],
                            type: TYPES.ALARM,
                            // id: "alarm_control_panel.home_alarm",
                            id: { state: 'disarmed' }, // replace it with real string id
                            title: '家庭报警器',
                            icons: {
                                arming: 'mdi-bell-outline',
                                disarmed: 'mdi-bell-off',
                                pending: 'mdi-bell',
                                armed_custom_bypass: 'mdi-bell-check',
                                armed_home: 'mdi-bell-plus',
                                armed_night: 'mdi-bell-sleep',
                                armed_away: 'mdi-bell',
                                triggered: 'mdi-bell-ring',
                            },
                            states: {
                                arming: 'Arming',
                                disarmed: 'Disarmed',
                                pending: 'Pending',
                                armed_custom_bypass: 'Armed custom bypass',
                                armed_home: 'Armed home',
                                armed_night: 'Armed night',
                                armed_away: 'Armed away',
                                triggered: 'Triggered',
                            },
                        },
                    ]
                },

            ]
        },

        {
            title: '设置',
            bg: './images/bg5.jpg',
            icon: 'mdi-cog-outline',
            groups: [

                {
                    title: '设置',
                    width: 3,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.CUSTOM,
                            title: '屏幕保护',
                            id: {},
                            icon: 'mdi-monitor',
                            state: '',
                            action: function (item, entity) {
                                window.showScreensaver()
                            }
                        },
                        {
                            position: [0, 1],
                            type: TYPES.CUSTOM,
                            title: '刷新页面',
                            id: {},
                            icon: 'mdi-refresh',
                            state: '',
                            action: function (item, entity) {
                                window.Noty.addObject({ title: 'HomeAssistant', message: '重新加载页面', lifetime: 3, type: 'success' })
                                location.reload()
                            }
                        },
                        {
                            position: [1, 0],
                            type: TYPES.CUSTOM,
                            title: '默认主题',
                            state: 'COMPACT',
                            id: {},
                            icon: 'mdi-palette-outline',
                            action: function (item, entity) {
                                tileboard.search('theme', 'COMPACT')
                            }
                        },
                        // 第一行
                        {
                            position: [2, 0],
                            type: TYPES.CUSTOM,
                            title: '透明主题',
                            state: 'TRANSPARENT',
                            id: {},
                            icon: 'mdi-palette-outline',
                            action: function (item, entity) {
                                tileboard.search('theme', 'TRANSPARENT')
                            }
                        },
                        // 第二行
                        {
                            position: [2, 1],
                            type: TYPES.CUSTOM,
                            title: 'WIN95主题',
                            state: 'WIN95',
                            id: {},
                            icon: 'mdi-palette-outline',
                            action: function (item, entity) {
                                tileboard.search('theme', 'WIN95')
                            }
                        },
                        // 第三行
                        {
                            position: [2, 2],
                            type: TYPES.CUSTOM,
                            title: '苹果主题',
                            state: 'HOMEKIT',
                            id: {},
                            icon: 'mdi-palette-outline',
                            action: function (item, entity) {
                                tileboard.search('theme', 'HOMEKIT')
                            }
                        },
                    ]
                },
            ]
        }
    ],
}
