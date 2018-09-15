/**
 * new 两个对象，a==1 b==2
 */

// 法一：
function fn() {
    num = 1;
    return function () {
        this.id = num++;
    };
}

// var fn2 = fn()
// var a = new fn2();
// var b = new fn2()

// console.log(a.id, b.id)

// 法二：

function Fn3() { }
var a = new Fn3()
var b = new Fn3()

Fn3.prototype._id = 1
a._id=10;
console.log(b._id);
Object.defineProperty(Fn3.prototype, "id", {
    get: function () {
        return this._id++
    }
})

console.log(a.id, b.id)
