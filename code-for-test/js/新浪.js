function readline() {
    return '10,1,3,5,5,8'
}
function print(res) {
    console.log(res)
}

var line = readline().split('|')
var arr = line[0].split(',')
arr = arr.map(item => parseInt(item))
var sum = parseInt(line[1])


function count(arr, sum) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {

            if (arr[i] + arr[j] === sum) count++;
            else continue;
        }
    }
    return count;
}

//print(count(arr,sum))

var arr = readline().split(',')
arr = arr.map(item => parseInt(item))


// 法一： 使用 api
function solution01(arr) {
    return [...new Set(arr)].sort((a, b) => (a - b))
}

//print(solution01(arr))


// 数组去重

function removeSame(arr) {
    var obj = {}; //key 值存储不同的 元素
    var key;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        key = arr[i];
        if (!obj[key]) {
            obj[key] = true;
        }
    }
    return Object.keys(obj).map(item => parseInt(item))
}

// console.log(removeSame([2,3,3,5]))

// 判断类型

function getType(parm) {
    return Object.prototype.toString.call(parm).slice(8, -1)
}

function serialize(arr) {
    var obj = {
        isEmpty: [],
        likeNumber: []
    }
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var item = arr[i];
        var itemType = getType(item);
        var isEmpty = false;
        var likeNumber = false;
        switch (itemType) {
            case 'Array':
                if (item.length === 0) isEmpty = true;
                break;
            case 'Object':
                if (Object.keys(item).length === 0) isEmpty = true;
                break;
            case 'String':
                if (item === '') isEmpty = true;
                else if((!Number.isNaN(Number(item)) )&& getType(Number(item))==='Number') likeNumber = true;
                break;
            case 'Number':
                likeNumber = true;
                break;
            case 'Null':
            case 'Undefined':
                isEmpty = true;
                break;
        }
        if(isEmpty){
            obj.isEmpty.push(item)
        }
        if(likeNumber){
            obj.likeNumber.push(item)
        }
    }
    return obj
}



var res = serialize(JSON.parse('["",0,{"name":"sina"},[1,2],"me","15.8",null,{}]'))
console.log(JSON.stringify(res))