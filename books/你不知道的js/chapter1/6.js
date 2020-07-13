function a (){
    var aa = 123
    function b(){
        aa = 0
        console.log(b)
    }
    b()
    console.log(aa)
}
a()