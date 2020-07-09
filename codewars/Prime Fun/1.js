const P=new Set([2]);

prime:for(let n=3;n<2000;n+=2) {
    let sq=n**.5+1;
    for(let p=3;p<sq;p+=2) if(n%p==0) continue prime;
    P.add(n);
}

function primeSumPair(nums){
    const dfs=(cnds)=>{
        if(!cnds.length) return 1;
        let n=cnds.pop();
        for(let i=0;i<cnds.length;i++) if(P.has(cnds[i]+n)){
            out.push([cnds[i],n]);
            if(dfs(cnds.filter((_,x)=>x!=i))) return 1;
            out.pop();
        }
    }
    let out=[];
    dfs(nums.slice());
    return out;
}