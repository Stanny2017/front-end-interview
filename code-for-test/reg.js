
// 判断是否是合法序列
function isLegalStr(str) {
    var arr = [],
        index;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            arr.push(str[i]);
        } else if (str[i] === ')') {
            index = arr.lastIndexOf('(')
            if (index === -1) return false;
            arr.splice(index, 1);
        }
    }
    return arr.length === 0
}

var result = 0;  // 存储最终结果
var reg = /\)/g;  // 匹配右括号

// 被递归调用的reduce：计算方案数
function reduce(str, index) {
    var arr = str.split('')
        arr.shift();// 去掉第一个 左括号
        // 删除index 下标

        arr.splice(index-1, 1)
        if (arr.length === 0) {
            result = result + 1;

            let res = reg.exec(str)
            if (res === null) {
                return;  //递归终止条件
            } else {
                index = res.index;
                arguments.callee(str, index);
            }
        }
        str = arr.join('');
        if (isLegalStr(str)) {
            let index = str.indexOf(')')

            arguments.callee(str, index);// 递归调用自身
        } else {
            let res = reg.exec(str)
            if (res === null) {
                return;  //递归终止条件
            } else {
                index = res.index;
                arguments.callee(str, index);
            }
    }
}

var index = '()()()'.indexOf(')')// 找到第一个右括号的下标
reduce('()()()()()', index)
console.log(result)