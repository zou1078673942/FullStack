decode=r=>{
    const m={},[x,k,s]=r.match(/(\d+)(.*)/);
    for (let i=0;i<26;i++) m[i*k%26]=String.fromCharCode(i+97);  
    return k%2&&k%13?[...s].map(e=>m[e.charCodeAt``-97]).join``:'Impossible to decode';
  }