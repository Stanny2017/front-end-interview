# keep 一/二面

## 一面 

1. position 的几个值 fix 会有什么问题 sticky 了解吗  
2. 多列等高布局， 详细说明 flex 的使用
3. 动画的实现方式： transition、animation、requestAnimationFrame、js 实现动画会有什么问题，如何优化 (setInterval) 动画监听事件
4. this 指针
5. 看一段代码说明输出
```js
function Foo(){
    return this;
}
Foo.getName = function(){
    console.log('a');
}
Foo.prototype.getName=function(){
    console.log('b');
}

new Foo.getName()
new Foo().getName()
```
6. http 报文结构；列举常见首部字段 http 缓存； http 1.0/1.1/2.0  特性 多路复用、管线化
7. cookie 和 localStorage ；js 如何访问cookie  如何禁止 js 访问cookie；如何禁用 cookie；
8. cookie 安全性 如何 配合session 一起使用； 浏览器隐身模式 可以访问 localStorage
9. 事件节流和防抖事件区别
10. virtual-dom 、react-dom-diff

## 二面 

1. 使用 react 过程中 遇到的问题
2. 写一段代码，考察对dom结点的操作，对象和数组的遍历，用到了递归
3. 开启缓存情况下，项目更新发布如何使用户拿到最新的代码
4. webpack 在项目中是如何使用的
5. 在项目中哪里使用到了 node ，为什么要使用 node
6. 项目中如何实现路由跳转，前端路由和后端路由的实现原理  location / history
7. 项目中进行了哪些性能优化的操作
8. 如何实现点击某个按钮后请求一段新的 js 文件
9. 项目打包部署的流程



