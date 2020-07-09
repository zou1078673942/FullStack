function throttle2(func, wait){
    let previous = 0,time = null
    return function(){
        let now = new Date().getTime()
        const remian = wait - (now - previous)
        if (now - previous > wait){
            func()
            previous = now
        }else if(!time){
            time = setTimeout(() => {
                func()
                time = null
                // 时间戳只运用于头事件
                // 之后中间的事件触发 (时间戳和timeout是互斥的)
                // 为了不让 时间戳触发事件   更新previous
                previous = new Date().getTime()
            }, remian);
        }
    }
}