# JavaScript学习笔记

## 模拟按键事件
```js
(() => {
    // 按下c键
    const kb = new KeyboardEvent('keydown', { key: 'c' })
    // 复写方法（可以省略）
    kb.composedPath=()=>{
        return [{
            tagName: '',
            parentElement: {
                tagName: ''
            }
        }]
    }
    window.dispatchEvent(kb);
})();
```