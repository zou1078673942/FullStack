var findCircleNum = function(M) {
    let friends = [],N = M.length,res = N
    for(let i=0;i<N;i++){
        friends.push(i)
    }
    function union(a,b){
        for(let i=0;i<friends.length;i++){
            if(friends[i] == a)
                friends[i] = b
        }
    }
    for(let i=0;i<N;i++){
        for(let j=i+1;j<N;j++){
            console.log(friends,M[i][j])
            if(M[i][j] == 1){
                if (friends[i] != friends[j]){
                    res--
                    union(friends[i],friends[j])
                }
            }
        }
    }
    console.log(res)
    return res
};
findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]])