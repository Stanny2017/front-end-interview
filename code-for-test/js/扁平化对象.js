var obj = {
    a: [1, 2, 3, { age: 18 }],
    b: {
        name: "xiaoqian",
        age: 18
    },
    c: 20
};

/**
 * result = {
 *    "a[0]": 1,
 *    "a[1]": 2,
 *    "a[2]": 3,
 *    "a[3].age": 18,
 *    "b.name": 'xiaoqian',
 *    "b.age": 18,
 *    "c": 20
 * }
 */

function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

var result = {};
function transfer(obj) {
    // if not object or array ,return false
    // 假设就是对象
    for (var key in obj) {
        var valueType = getType(obj[key]);
        if (valueType === "Object") {
            arguments.callee(obj[key]);
        }
        if (valueType === "Undefined" || valueType === "Null") {
            continue;
        }
        result[key] = obj[key];
    }
    return result;
}

/**
 * 2018-09-07
 * xiaoqian
 */

function transferObj(obj, str) {
    if (!this.rsu) {
        rsu = {};
    }
    var valueType = getType(obj);
    if (valueType == "Object") {
        for (var key in obj) {
            var tmp = "";
            if (str) {
                tmp = str + "." + key;
            } else {
                tmp = str + key;
            }
            transferObj(obj[key], tmp);
        }
    } else if (valueType == "Array") {
        var len = obj.length;
        for (var i = 0; i < len; i++) {
            var tmp = str + "[" + i + "]";
            transferObj(obj[i], tmp);
        }
    } else if (valueType == "Undefined" || valueType == "Null") {
    } else {
        rsu[str] = obj;
    }
}

transferObj(obj, "");
console.log(JSON.stringify(rsu));

function transferObj2(obj) {
    var key = [],
        result = {};
    var temp = obj;

    // 假设 obj 类型就是对象

    var innerFunction = function (temp) {

        if (getType(temp) === "Array") {
            for (var i = 0; i < temp.length; i++) {
                var item = temp[i];
                if (getType(item) === 'Object' || getType(item) === 'Array') {
                    key.push(`${item}[${i}]`);
                    arguments.callee()
                }
            }
        } else if (getType(temp) === "Object") {
            for (var k in temp) {
                temp = temp[k];
            }
        } else if (valueType == "Undefined" || valueType == "Null") {
            continue;
        } else {
            result[key[key.length]] = obj[key]
        }

    }

}
