/**
 * 最长无重复子串
 */

//var str = readline();

function getMax(str) {
    var arr = str.split("");
    var left = 0,
        right = 0,
        max = 1;

    while (right < arr.length - 1) {
        right++;
        // 检查子串是否有重复
        var index = arr.slice(left, right).indexOf(arr[right]);
        if (index === -1) {
            if (right - left + 1 > max) {
                max = right - left + 1;
            }
        } else {
            left = left + index + 1;
        }
    }
    return max;
}
// console.log(getMax('bbcvb'))

/**
 * 抖音红人，关系对
 */
// var N = parseInt(readline())
// var M = parseInt(readline())
// var arr = readline().split(' ')
// arr = arr.map(function (item) {
//     return parseInt(item)
// })
// 存储关系对

var M = 4,
    N = 3,
    arr = [1, 2, 2, 1, 2, 3, 3, 1];

var map = {};
var count = 0;
for (var i = 0; i < M; i++) {
    map[i] = arr.slice(2 * i, 2 * i + 2);
}
// console.log(JSON.stringify(map))
// 存储每个人被直接关注的用户
var mapResult = {};
for (let k in map) {
    var key = map[k][1];
    if (!mapResult[key]) {
        mapResult[key] = [map[k][0]];
    } else {
        mapResult[key].push(map[k][0]);
    }
}
// console.log(JSON.stringify(mapResult))
// 加入被间接关注的用户
for (let k in mapResult) {
    var arr = mapResult[k];
    if (arr.length + 1 === N) continue;
    for (let item of arr) {
        var arr2 = mapResult[item];
        if (!arr2) continue;
        for (let i of arr2) {
            // 去除本身
            if (i == k) continue;
            // 去除重复
            if (arr.indexOf(i) !== -1) continue;
            arr.push(i);
        }
    }
}
// console.log(JSON.stringify(mapResult))

for (let k in mapResult) {
    if (mapResult[k].length + 1 === N) {
        count++;
    }
}

// console.log(count)
// print(count)

// 头条备战
/**
 * 1. var arr1=[a,b,c,d],arr2=[1,2,3];
 * 输出：a1b2c3d1a2b3c1......
 */

function solution1(arr1, arr2) {
    var len1 = arr1.length;
    var len2 = arr2.length;
    var result = "";
    var a = 0,
        b = 0;
    for (let i = 0; i < 10; i++) {
        a = a % len1;
        b = b % len2;
        result += arr1[a] + arr2[b];
    }
    return result;
}
console.log(solution1(["a", "b", "c", "d"], [1, 2, 3]));

/**
 *
 * 2. 三种方式改写以下函数，输出 0 1 2 3 4
 * 并用 promise 实现
 */
//方式1 let 局部作用域
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000 * i);
}
// 方式2 ： 闭包

function test(a) {
    setTimeout(function () {
        console.log(a);
    }, 1000 * a);
}
for (var i = 0; i < 5; i++) {
    // (function (i){
    //     setTimeout(function (){
    //         console.log(i)
    //     },1000*i)
    // })(i)
    test(i);
}
// 方式三： 同理闭包
for (var i = 0; i < 5; i++) {
    (function () {
        var temp = i;
        setTimeout(function () {
            console.log(temp);
        }, 1000 * i);
    })();
}

// 方式四：利用 setTimeout() 的第三个参数

for (var i = 0; i < 5; i++) {
    setTimeout(
        function (arg) {
            console.log(arg);
        },
        1000 * i,
        i
    );
}

// 如果要利用 promise

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(i);
        resolve();
    }, 1000);
});

for (var i = 0; i < 5; i++) {
    new Promise(function (resolve, reject) {
        setTimeout(
            function (i) {
                resolve(i);
            },
            1000 * i,
            i
        );
    }).then(i => console.log(i));
}

for (var i = 0; i < 5; i++) {
    new Promise(function (resolve, reject) {
        (function () {
            var temp = i;
            setTimeout(function () {
                resolve(temp);
            }, 1000 * i);
        })();
    }).then(t => console.log(t));
}

/**
 * 3. 找第 k 大,下标为 k-1 
 *
 */
function findK(arr, k) {
    // 利用快排思想
    if (k <= 0 || k > arr.length) return null;
    var centerItem = arr[0],
        left = [],
        right = [],
        center = [centerItem];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === centerItem) {
            center.push(centerItem);
        } else if (arr[i] > centerItem) {
            right.push(arr[i]);
        }
    }
    var len2 = left.length + center.length;
    if (k > left.length && k <= len2) {
        return centerItem;
    } else if (k <= left.length) {
        findK(left, k);
    } else {
        findK(right, k - len2);
    }
}

/**
 * 4. 二维数组：子数组等长,斜着输出
 */



/**
 *  lgn 找出有序数组中某个数的出现次数
 */
/**
 *  思路：有序数组 二叉查找 前后遍历计数
 */
function findIndex(arr, k) {
    var len = arr.length;
    if (len === 0) return 0;

    var low = 0,
        high = len - 1,
        mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) {
        var temp = mid
        var count = 1;
        while (mid > 0) {
            mid--;
            if (arr[mid] === k) {
                count++;
            } else {
                break;
            }
        }
        while (temp < len - 1) {
            temp++;
            if (arr[temp] === k) {
                count++;
            } else {
                break;
            }
        }
        return count;
    } else if (arr[mid] < k) {
        return findIndex(arr.slice(mid + 1), k);
    } else {
        return findIndex(arr.slice(low, mid));
    }
}

/**
 * 6. 函数声明和函数表达 同名变量
 */


/**
 * 最短路径写代码
 */



/**
 * 求二叉树的深度
 */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var root = new TreeNode("root", a, b);
var a = new TreeNode("a", aLeft, null);
var b = new TreeNode("b", bLeft, bRight);

var aLeft = new TreeNode("aleft", null, null);
var bLeft = new TreeNode("bleft", null, null);
var bRight = new TreeNode("bright", c, null);
var c = new TreeNode("c", null, null);

function depth(root) {
    var node = root;

    if (node) {
        return 0;
    }
    return Math.max(depth(node.left), depth(node.right)) + 1;
}
console.log(depth(root));

/**
 * lcs
 */

// LCS longest common sequence

function lcs(str1, str2) {
    var len1 = str1.length;
    var len2 = str2.length;
    if (len1 === 0 || len2 === 0) {
        return {
            len: 0,
            indexStr1: [],
            indexStr2: [],
            cs: ""
        };
    }

    var i = len1 - 1;
    var j = len2 - 1;

    if (str1[i] === str2[j]) {
        var obj = lcs(str1.slice(0, i), str2.slice(0, j));
        return {
            len: 1 + obj.len,
            indexStr1: obj.indexStr1.concat(i),
            indexStr2: obj.indexStr2.concat(j),
            cs: obj.cs + str1[i]
        };
    } else {
        var lcs1 = lcs(str1.slice(0, len1), str2.slice(0, len2 - 1));
        var lcs2 = lcs(str1.slice(0, len1 - 1), str2.slice(0, len2));
        var maxLen = Math.max(lcs1.len, lcs2.len);
        return {
            len: maxLen,
            indexStr1: maxLen === lcs1.len ? lcs1.indexStr1 : lcs2.indexStr1,
            indexStr2: maxLen === lcs1.len ? lcs1.indexStr2 : lcs2.indexStr2,
            cs: maxLen === lcs1.len ? lcs1.cs : lcs2.cs
        };
    }
}

lcs("xiayuoqiano", "xiaoqian-Guo");
