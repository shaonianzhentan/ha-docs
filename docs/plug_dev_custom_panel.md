# 自定义面板

*视频介绍：https://www.bilibili.com/video/BV1b5411Y7Ty/*

---

> 面板的定义

*文件名称：`custom-panel-name.js`*

```js
class CustomPanelName extends HTMLElement {

    /*
     * 侧边栏[展开/收起]
     *   展开：true
     *   收起：false
     */
    set narrow(value) {
		  this._narrow = value
      // 做一些操作
    }

    // 设置面板配置信息
    set panel(value) {
        this._panel = value
        this._config = value.config
    }

    // 设置核心hass对象
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
        ha_card.className = 'custom-panel-name'
        ha_card.innerHTML = `
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
        
    }

    // 更新界面数据
    updated(hass){
        let { $, _config } = this
        
    }

}

// 定义DOM对象元素
customElements.define('custom-panel-name', CustomPanelName)
```

> 面板的使用

官方参考文档：https://www.home-assistant.io/integrations/panel_custom/

```yaml
# 自定义面板
panel_custom:
  - name: custom-panel-name
    sidebar_title: 自定义面板
    sidebar_icon: mdi:work
    url_path: custom-panel-name
    js_url: /local/custom-panel-name.js
    config:
      info: 配置信息
      test: 测试信息xxx
```