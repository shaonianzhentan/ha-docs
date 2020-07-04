# 自定义Lovelace卡片

*视频介绍：https://www.bilibili.com/video/BV1zg4y1v7WE/*

---

> 新建自定义Lovelace卡片文件

*文件名称：`custom-card-name.js`*
```js
class CustomCardName extends HTMLElement {

    // 自定义默认配置
    static getStubConfig() {
        return { entity: "sun.sun" }
    }
  
    /*
     * 设置配置信息
     */
    setConfig(config) {
        if (!config.entity) {
            throw new Error('你需要定义一个实体');
        }
        this._config = config;
    }

    // 卡片的高度(1 = 50px)
    getCardSize() {
        return 3;
    }

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
    callService(service_name, service_data = {}){
        let arr = service_name.split('.')
        let domain = arr[0]
        let service = arr[1]
        this._hass.callService(domain, service, service_data)
    }

    // 通知
    toast(message) {
        this.fire("hass-notification", { message })
    }

    // 显示实体更多信息
    showMoreInfo(entityId){
        this.fire('hass-more-info', { entityId })
    }

    /*
     * 接收HA核心对象
     */
    set hass(hass){        
        this._hass = hass
        if(this.isCreated === true){
            this.updated(hass)
        } else {
            this.created(hass)
        }
    }

    // 创建界面
    created(hass){

        /* ***************** 基础代码 ***************** */
        const shadow = this.attachShadow({ mode: 'open' });
        // 创建面板
        const ha_card = document.createElement('ha-card');
        ha_card.className = 'custom-card-panel'
        ha_card.innerHTML = `
            <button id="btnToast">测试通知</button>
            <button id="btnMoreInfo">显示更多实体</button>
            <p>这里写上自定义的HTML标签即可</p>
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
        let { _config, $ } = this
        // 定义事件
        $('#btnToast').onclick = () => {
            this.toast("我是一个提示哦！")
        }
        $('#btnMoreInfo').onclick = () => {
            this.showMoreInfo(_config.entity)
        }
    }

    // 更新界面数据
    updated(hass){
        let { $, _config } = this
        $('p').textContent = `当前实体ID：${_config.entity}`
    }
}

// 定义DOM对象元素
customElements.define('custom-card-name', CustomCardName);

// 添加预览
window.customCards = window.customCards || [];
window.customCards.push({
  type: "custom-card-name",
  name: "卡片名称",
  preview: false,
  description: "卡片名称描述"
});
```

官方文档地址：https://developers.home-assistant.io/docs/frontend/custom-ui/lovelace-custom-card