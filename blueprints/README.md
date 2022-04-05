# 蓝图

## 我的电脑

电脑鼠标控制
```yaml
topic: windows/mouse
payload:
  type: left_click
  type: right_click
  type: m_click
  type: left_dblclick
  type: right_dblclick
  type: m_dblclick
  type: move
  x: 10
  y: 10
payload: '{"type": "move", "x": 10, "y": 10}'
payload: '{"type": "left_click"}'
```

电脑键盘控制 [键码（KeyCode）对照表](http://www.atoolbox.net/Tool.php?Id=815)
```yaml
topic: windows/keyboard
payload: '{"type": "keypress", "key": 91}'
payload:
  type: keypress
  type: keydown
  type: keyup
  key: 96
```
|  键名      | 键码   |
|  :----:    | :----:  |
| 左win      | 91    |
| 右win      | 92    |
