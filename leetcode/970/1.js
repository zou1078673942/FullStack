/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    let arr = [];
    for (let i=0; i<=100; i++){
        for(let j=0; j<=100; j++){
            let num = Math.pow(x,i) + Math.pow(y,j);
            if(num>bound)
                break;
            if(arr.indexOf(num)==-1){
                arr.push(num);
                // console.log(num)
            }
        }
    }
    return arr;
};
console.log(powerfulIntegers(2,3,10))