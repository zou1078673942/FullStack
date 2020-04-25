//  将一个字符串改变成另一个字符串需要多少步
//  计算  莱文斯坦距离
var a = "abcde";
var b = "arbcde";
var n = 5, m = 6;
var minDistance = Infinity;
function lwstBT ( i, j, edist){
    if( i == n || j == m){
        if(i < n) edist += (n - i);
        if(j < m) edist += (m - j);
        if(edist < minDistance) minDistance = edist;
        return ;
    }
    if(a[i] == b[j]){
        lwstBT(i + 1, j + 1,edist)
    }else{
        lwstBT(i + 1, j, edist + 1);
        lwstBT(i, j + 1, edist + 1);
        lwstBT(i + 1, j + 1, edist + 1);
    }
}
lwstBT(0, 0, 0);
console.log(minDistance);