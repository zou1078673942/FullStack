// async await
const fs = require('fs');
const promise1 = new Promise((resolve, reject) => {
    fs.readFile('./package.json',(err, info) => {
        resolve(info);
    })
})
const promise2 = (info) =>{
    return new Promise((resolve,reject) => {
        fs.writeFile('./p.json',info,(err) =>{
            if(!err){
                resolve();
            }
        })
    })
}
promise1.then((info) => {
    return promise2(info);
})