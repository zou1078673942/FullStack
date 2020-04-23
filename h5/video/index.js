// // 定义变量   变量名  =   选中（html结构）
// const speed = document.querySelector('.speed')
// const bar = document.querySelector('.speed-bar')
// const video = document.querySelector('.flex')

// function handleMove(e){
//     const y = e.pageY - this.offsetTop;   //offsetTop获取某个dom结构到浏览器顶部的距离
//     const percent = y / this.offsetHeight;  //offsetHeight用来获取某dom
//     const min = 0.4;
//     const max = 4;
//     const height = Math.round(percent * 100) + '%';
//     const playbackRate = percent * ( max - min ) + min;
//     bar.style.height = height
//     bar.textContent = playbackRate.toFixed(2) + 'x'
//     video.playbackRate = playbackSpeed
// }

// speed.addEventListener('mousemove' , handleMove)
const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

// console.log(video.offsetHeight)

function handleMove(e) {
  // console.log(e.pageY)
  const y = e.pageY - this.offsetTop; // offsetTop获取某个dom结构到浏览器顶部的距离
  const percent = y / this.offsetHeight; // offsetHeight用来获取某dom结构的自身高度
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * ( max - min ) + min;

  // console.log(y, percent, height, playbackRate)
  bar.style.height = height
  bar.textContent = playbackRate.toFixed(2) + 'x'
  video.playbackRate = playbackRate
}


speed.addEventListener('mousemove', handleMove)