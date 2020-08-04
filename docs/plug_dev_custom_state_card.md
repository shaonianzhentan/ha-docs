# 自定义状态卡片

*视频介绍：https://www.bilibili.com/video/BV1Ct4y197eo/*

---

> 新建自定义状态卡片文件

*文件名称：`custom-card-state.js`*
```js
class CustomCardState extends HTMLElement {

    /*
     * 触发事件
     * type: 事件名称
     * data: 事件参数
     */
    fire(type, data) {
        const event = new Event(type, {
            bubbles: true,
            cancelable: false,
            composed: true
        });
        event.detail = data;
        this.dispatchEvent(event);
    }

    /*
     * 调用服务
     * service: 服务名称(例：light.toggle)
     * service_data：服务数据(例：{ entity_id: "light.xiao_mi_deng_pao" } )
     */
    callService(service_name, service_data = {}) {
        let arr = service_name.split('.')
        let domain = arr[0]
        let service = arr[1]
        this._hass.callService(domain, service, service_data)
    }

    // 通知
    toast(message) {
        this.fire("hass-notification", { message })
    }
    
    /*
     * 接收HA核心对象
     */
    set hass(hass) {
        this._hass = hass
        if (!this.isCreated) {
            this.created(hass)
        }
    }

    get stateObj() {
        return this._stateObj
    }

    // 接收当前状态对象
    set stateObj(value) {
        this._stateObj = value
        // console.log(value)
        if (this.isCreated) this.updated()
    }
    
    // 创建界面
    created(hass) {
        /* ***************** 基础代码 ***************** */
        const shadow = this.attachShadow({ mode: 'open' });
        // 创建面板
        const ha_card = document.createElement('div');
        ha_card.className = 'custom-card-panel'
        ha_card.innerHTML = `
            <button id="btnToast">测试通知</button>
            <button id="btnMoreInfo">调用服务</button>
            <p>这里写上自定义的HTML标签即可</p>
            <ul id="attrs"></ul>
        `
        shadow.appendChild(ha_card)
        // 创建样式
        const style = document.createElement('style')
        style.textContent = `
            .custom-card-panel{}
        `
        shadow.appendChild(style);
        // 保存核心DOM对象
        this.shadow = shadow
        this.$ = this.shadow.querySelector.bind(this.shadow)
        // 创建成功
        this.isCreated = true
        /* ***************** 附加代码 ***************** */
        let { $ } = this
        // 定义事件
        $('#btnToast').onclick = () => {
            this.toast("我是一个提示哦！")
        }
        $('#btnMoreInfo').onclick = () => {
            this.callService("media_player.media_play_pause", {
                entity_id: "media_player.ha_cloud_music"
            })
        }
    }
    
    // 更新界面数据
    updated(hass) {
        let { $, _stateObj } = this
        $('p').textContent = `当前实体ID：${_stateObj.entity_id}`
        $('#attrs').innerHTML = `<li>当前更新时间：${new Date().toLocaleString()}</li>`
        Object.keys(_stateObj.attributes).forEach(key => {
            let li = document.createElement('li')
            li.innerHTML = `${key}: ${_stateObj.attributes[key]}`
            $('#attrs').appendChild(li)
        })
    }
}
// 定义DOM对象元素
customElements.define('custom-card-state', CustomCardState);

```