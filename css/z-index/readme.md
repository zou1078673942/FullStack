## 一个网页是沿着一条 Z 轴排开的 (图层)

## 层叠上下文形成
- 条件
    1. position 不为 static
    2. filter transform perspective 不为 none
    3. will-change

## layers
- 共同点: 都是z-轴 顺序
- transform: translate3d
- will-change
- perspective

## 
js -> relayout -> repaint -> composite(合成) -> GPU

## 提升layers的好处
- 当前这个layers彼岸花不会影响其他layers
- 对于transform、opacity发生变化时, 不会经过 relayout repaint 跳到 composite(性能非常nice)