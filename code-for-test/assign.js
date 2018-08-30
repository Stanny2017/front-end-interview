var obj1 = {
    name:'xiaoqian',
    fn:{
        age:'12',
        obj: {
            desc: 'obj in obj1.fn.obj'
        }
    }
}

var newObj = obj1


newObj.name='daipeng'
console.log(newObj)

newObj.fn.age='2000'

console.log(obj1.fn.age,newObj.fn.age)
console.log(obj1.name,newObj.name)