console.log((function (r){
    try{
        return r
    }finally{
        r=null
    }
})('1'))