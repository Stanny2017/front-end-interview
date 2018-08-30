/**
 * 数组中存有 n 个异步请求，封装函数，并行发送
 */

const request = (promiseArr) => {
    // 要求参数是数组类型
    if (!promiseArr instanceof Array) return;
    // 数组每一项转换 promise 实例
    promiseArr = promiseArr.map((item) => Promise.resolve(item));
    // 迭代数组处理异步
    promiseArr.reduce((prev, cur) => {
        return prev.then(cur)
    })
}

let arr = []

function request2(){
    return new Promise(()=>{
        setTimeout()
    })
}

console.log(a)
var a = 'dp'
function a(){
    console.log('xiaoqian')
}
console.log(a)