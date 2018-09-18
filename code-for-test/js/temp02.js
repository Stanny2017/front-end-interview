function isHeXie(number, n) {
    var a = number.toString().split('');
    a = a.map(item => parseInt(item))
    var sum = a.reduce((prev, cur) => (prev + cur))
    if (number % sum === 0) {
        return 'Yes'
    } else {
        return 'No'
    }
}

var arr = [34, 66, 72, 6, 32, 33, 86]

for (var i = 0; i < arr.length; i++) {
    console.log(isHeXie(arr[i], i + 1))
}



// 没有 1 就返回 0


// 巧克力糖坚果
if(arr.indexOf(1)===-1){
    return 0
}else{
    (function count(arr) {
        // 每次递归进来都是有1
        var indexOf0 = arr.indexOf(0)
        if (indexOf0 === -1) return 1
    
        var firstOneIndex = arr.indexOf(1)
        var lastOneIndex = arr.lastIndexOf(1)
    
        if (firstOneIndex !== lastOneIndex) {
            
            var secondOneIndex = arr.slice(firstOneIndex + 1).indexOf(1) + (firstOneIndex + 1)
            return (secondOneIndex - firstOneIndex) * count(arr.slice(secondOneIndex))
        } else {
            return 1
        }
    })(arr)
}

console.log(count[1, 0, 1, 1])
console.log(count([0, 1, 1, 0, 1, 1]))






function Foo(){
    return this;
}
Foo.getName = function(){
    console.log('xiaoqian');
}
Foo.prototype.getName=function(){
    console.log('daipeng');
}

new Foo.getName
new Foo().getName()

var city={
    name:'shanghai'
}
function fn(obj){
    obj.name='beijing'
    obj = {
        name: 'hangzhou'
    }
}
fn(city)
console.log(city.name)