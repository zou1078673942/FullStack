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
- backface-visibility: hidden
- css3 中的 animation 动画开始的时候

video
有 3D transform
backface-visibility 为 hidden
对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）
will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）

## 
js -> relayout -> repaint -> composite(合成) -> GPU

## 提升layers的好处
- 当前这个layers彼岸花不会影响其他layers
- 对于transform、opacity发生变化时, 不会经过 relayout repaint 跳到 composite(性能非常nice)