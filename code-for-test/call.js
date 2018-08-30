function fn(){
    console.log(this.name)
    console.log(arguments)
    for(let i = 0; i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
// 疑问： 把 fn 定义成箭头函数不起作用

var obj = {
    name: 'dp'
}
var fn1 = fn.bind(obj,'prev') // 预先绑定参数
// fn1(1,2,'dp') //  



// var name = "xiaoqian-Guo"
// var arrowfn =()=> {
//     console.log(this.name);
// }

// arrowfn.call({name:'stanny'})