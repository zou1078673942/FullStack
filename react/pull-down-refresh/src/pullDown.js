import hammer from 'hammerjs'

export default function webPullToRefresh() {
  var defaults = {
    bodyEl: document.body,// 最外层盒子
    contentEl: null,         //内容区域
    ptrEl: null,            //loading
    distance: 40,           //下拉行为大于40 生效
    loadingFunction: () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 3000)
    }), //返回promise
    resistance: 2.5             //阻尼
  }
  function init(options) {
    options = {
      ...defaults,
      ...options
    }
    const h = new hammer(options.contentEl);
    h.get('pan').set({ direction: hammer.DIRECTION_VERTICAL })
    h.on('panstart', _panStart)
    h.on('pandown', _panDown)
    h.on('panup', _panUp)
    h.on('panend', _panEnd)
    const ptrClass = options.ptrEl.classList
    let pan = {};
    function _panStart() {
      ptrClass.add('ptr-start')
    }
    function _panDown(e) {
      console.log('pan down')
      pan.distance = e.distance / options.resistance
      _setContentPan()
    }
    function _panUp(e) {
      pan.distance = e.distance / options.resistance
      _setContentPan()
    }
    function _panEnd() { 
      if (ptrClass.contains('ptr-refresh')) {
        _loading()
      }else {
        _reset()
      }
    }
    function _reset() {
      options.contentEl.style.transform =
        `translate3d(0,0,0)`
      options.ptrEl.style.transform =
        `translate3d(0,0,0)`
    }
    function _loading() {
      options.contentEl.style.transform =
        `translate3d(0,60px,0)`
      options.ptrEl.style.transform =
        `translate3d(0,60px,0)`
      options.loadingFunction().then(() => {
        _reset()
      })

    }
    function _setContentPan() {
      options.contentEl.style.transform = 
        `translate3d(0,${pan.distance}px,0)`
      options.ptrEl.style.transform =
        `translate3d(0,${pan.distance}px,0)`

      if (pan.distance > options.distance) {
        ptrClass.add('ptr-refresh')
      }else {
        ptrClass.remove('ptr-refresh')
      }
    }
  }
  return {
    init
  }
}