# 自定义面板

*视频介绍：*

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
    set hass(value){
        this._hass = value
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