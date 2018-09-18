function a() {
    return {
        sleep: function (time) {
            // while 循环可以实现等待
            //...
            var now = new Date();
            while (true) {
                if (new Date() - now > 1000) break;
            }
            console.log('a');
            return this;
        }
    };
}

a()
    .sleep(1000)
    .sleep(1000).sleep(1000).sleep(1000)




// sleep 实现

var sleep = time => new Promise(resolve=>{
    setTimeout(resolve,1000)
})

async function test(time){
    await sleep(time);
    
    // do something
}

// var promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve()
//     },1000)
// })
// a().sleep(1000).sleep(1000) 

// promise.then(()=>{
//     console.log('a')
// }).then(()=>{
//     console
// })
