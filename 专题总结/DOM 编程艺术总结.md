# 《js DOM 编程艺术》

## 第三章 DOM

1. `document.getElementsByTagName("*").length` 该份文档中共有多少元素节点 
2. 文档中每个元素节点都是一个对象
3. 一份文档就是一棵节点树
4. 节点分为三种类型：元素、文本、属性
5. 每个节点都是一个对象

## 第五章 最佳实践

1. 平稳退化: 用户浏览器不支持 js 时也能正常运行 而不是直接崩掉
2. 分离 js 行为和结构分离
3. 向后兼容，渐进增强：对象检测，如果浏览器不支持某个DOM方法， `return false`
4. 性能考虑： 尽量少访问 DOM 和 减少标记，每次访问DOM 节点都会遍历整个DOM 树，如多次使用应做缓存；尽量减少文档标记数量，过多的元素只会增加 DOM 树的规模，增加遍历查找的时间

## 第六章 图片库案例

1. 尽量让代码不在依赖于那些没有保证的代码
2. 几乎所有的浏览器里，按下回车也会触发 onclick 事件
3. DOM Core 的几个方法

## 第七章 动态创建标记

1. document.write
2. document.innerHTML
3. createElement
4. createTextNode
5. appendChild
6. insertBefore
7. nextSibling (下一个兄弟节点) 

## 第八章 充实文档内容

1. getAttribute
2. getElementsByTagName
3. js 脚本只应该用来充实文档内容，避免使用 DOM 技术来创建核心内容  核心内容应该一开始就设计在 html 中

## 第九章 CSS-DOM

1. style 属性只能返回内嵌 样式
2. 
3. 
4. 
5. 
6.


