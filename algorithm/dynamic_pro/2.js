var a = "abcde";
var b = "arbcde";
var n = 5, m = 6;
// var minDistance = Infinity;
var edist = [[]];
function lwstBT ( i, j){
    var edist = [[]];
    edist[0,j] = j;
    console.log(edist(0,1));
    edist[i,0] = i;
    for(i=1; i<n; i++){
        for(j=1; j<m; j++){
            edist[i,j] = Math.min(edist[i-1,j],edist[i,j-1],edist[i-1,j-1]);
            console.log(edist[i,j]);
        }
    }
    // console.log(edist[5,5]);
}
lwstBT(0,0)