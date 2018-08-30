const promise = new Promise((resolve,reject)=>{
    if(a==b){
        resolve('right')
    }else{
        reject('error')
    }
})
promise.then(()=>{})