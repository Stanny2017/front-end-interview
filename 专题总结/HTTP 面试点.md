# http 协议中的 8 种方法

1. options 
获取服务器支持的 http 方法；跨域请求时的预检，确保安全
2. head
类似于 get 方法，但是不返回响应体，只请求页面首部。这个方法经常用来测试超链接的有效性，可用性和最近修改。 
3. get
4. post
5. delete
6. trace
回显服务器收到的请求，主要用于测试或诊断
7. connect
HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器
8. put
向指定资源位置上传其最新内容

## http1.0 && http 1.1 && http 2.0

- [reference](https://www.jianshu.com/p/52d86558ca57)
- [廖雪峰 http 简介](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001432011939547478fd5482deb47b08716557cc99764e0000)

1. http 协议是浏览器和服务器之间传输 html 的通信协议；我们在浏览器地址栏里面输入一个网址，实际上就是拿到服务器传输过来的html代码，然后再浏览器渲染出来。
2. 目前 http 协议的版本就是 1.1；大多数服务器也支持 1.0；主要区别在于 1.1 允许多个 http 请求复用同一个 tcp 连接。
3. http 1.1 的特性主要有两个，持久连接和管线化，持久连接允许多个 http 复用同一个 tcp 连接，1.0 每一个请求都需要建立一个连接，管线化的特性是在持久连接的基础上，将请求一次性发送，响应也一次性发送；原来是 请求1->响应1->请求2->响应2，现在是 1,2,->1,2；后面的请求不需要等待前面的返回。管线化支持 get 和 head ，对 post 有所限制。
4. http 2.0 提高了使用 web 速度体验，多路复用，首部字段压缩，二进制

## http & https

1. 默认端口号： http 80 ；https 443
2. http 明文传输；https 加了一层 ssl  ，http 先和 ssl 通信，再由 ssl 和 tcp 通信；多一个加密过程，有了密钥才能进行解密。
3. https 具有加密、证书（需要向认证机构购买）、完整性保护等功能。
4. https 虽然更安全，但同时也会消耗更多的 cpu 和 资源。速度比 http 慢。合理的方式是按需使用。

## http 缓存 

另起章节讨论






