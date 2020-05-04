window.onload = function(){
    const tabLinks = this.document.querySelectorAll('.tabbar a')
    tabLinks.forEach(function(link){
        link.addEventListener('click',function(event){
            //  取消默认事件  不转跳
            event.preventDefault();
            //  取消selected 点击之后给点击的 添加selected
            document.querySelector('.selected')
                .classList.remove('selected');
            this.classList.add('selected')
        },false)
    })
    fetch('http://localhost:3000/banner')
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
}