
function love1(){
    var num = 223;
    var me1 = function() {
          console.log(num);
    }
    console.log(num);
    num++;
    return me1;
}
var loveme1 = love1();
loveme1(); 
