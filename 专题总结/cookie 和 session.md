# cookie & session

## cookie

1. cookie 存储在客户端，主要用来让服务器辨识两个请求是否来自同一个浏览器，以及用来保存用户的一些状态信息。
cookie 通常保存的值包括 name、value、到期时间，所属域名。浏览器第一次访问某个域名时，服务器返回的头部字段里“set-cookie”往客户端种一个 cookie ，客户端就会保存这个 cookie，在后续的每次请求都会带上它。
2. 一般来说，单个域名设置的cookie 不超过 30 个，每个 cookie 的存储上限是 4kb, 不用浏览器的设置不太一样；
3. cookie 不设置过期时间的话是存储在内存中，浏览器关闭就删除；设置了过期时间就是存储在硬盘中。
3. 禁用 cookie 可以在浏览器端也可以在服务端
4. `document.cookie` 属性用于读写 cookie；设置 http-only 可以禁止 js 访问 cookie
```js
// 读取浏览器是否禁用了 cookie
navigator.cookieEnabled //  false 则禁用了 cookie
```
5. cookie 安全性不高 容易被窃取
6. 禁用 cookie 在浏览器端使用 隐身模式

```javascript
// 浏览器是否打开 Cookie 功能
window.navigator.cookieEnabled // true
```

## session

1. session 和 cookie 的作用是一样的，也是用来辨识用户身份和存储用户状态信息。
2. session 存储在服务端，服务器为了提高存取速度，一般把session 存在内存里，每个用户都一个独立的 session，用 session ID值唯一标志
3. cookie 和 session 一般结合使用，当浏览器首次访问服务器时，服务器通过认证，就会这个用户分配一个 session， 然后把 sessionID 种到 cookie 上，这样当浏览器再次请求就会带上 这个 session ID ，服务器就可以辨识用户的身份。
4. 由于 cookie 容易被窃取，一般把登录等重要信息存在 session，其他信息可以放入 cookie


