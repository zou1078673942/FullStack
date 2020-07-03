/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    let arr = [];
    let xb = [],yb = [];
    for(let i=0;i<100;i++){
        if(Math.pow(x,i)>=bound)
            break;
        xb.push(Math.pow(x,i))
    }
    for(let i=0;i<100;i++){
        if(Math.pow(y,i)>=bound)
            break;
        yb.push(Math.pow(y,i))
    }
    for(let i=0;i<xb.length;i++){
        for(let j=0;j<yb.length;j++){
            if(xb[i]+yb[j]>bound)break;
            if(arr.indexOf(xb[i]+yb[j]) == -1)
            arr.push(xb[i]+yb[j])
        }
    }
    return arr;
};
console.log(powerfulIntegers(2,3,10))