/**
 * 两个数组有序(升序)，合并后有序输出
 * 
 */

function combineArray(arr1, arr2) {
    var result = [];
    var i = 0,
        j = 0,
        len1 = arr1.length,
        len2 = arr2.length;
    while (i < len1 && j < len2) {

        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }

    if (i === len1) {
        result = result.concat(arr2.slice(j, len2))
    } else if (j === len2) {
        result = result.concat(arr1.slice(i, len1))
    }
    return result

}

//console.log(combineArray([], [0, 2, 4, 67, 100]))

// by xiaoqian-Guo

function mergeArr(arr1, arr2) {
    var len1 = arr1.length;
    var len2 = arr2.length;
    var i = 0, j = 0;
    var rsu = [];
    if (len1 == 0 || len2 == 0) {
        return arr1 == [] ? arr2 : arr1;
    }
    else {
        while (i < len1 && j < len2) {
            if (arr1[i] < arr2[j]) {
                rsu.push(arr1[i]);
                i++;
            }
            else if (arr1[i] > arr2[j]) {
                rsu.push(arr2[j]);
                j++;
            }
            else {
                rsu.push(arr1[i]);
                rsu.push(arr2[j]);
                i++;
                j++;
            }
        }
        if (i < len1) {
            rsu = rsu.concat(arr1.slice(i));
        }
        if (j < len2) {
            rsu = rsu.concat(arr2.slice(j));
        }
    }
    return rsu;
}
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10, 12];
//console.log(mergeArr(arr1, arr2));


/**
 *  给定一个数组，要求 i<j && a[i]-a[j] 最大
 */

const findMax = arr => {
    let max = -Infinity
    let diff, left, right
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (j = len - 1; j > i; j--) {
            diff = arr[i] - arr[j]
            if (diff > max) {
                left = i
                right = j
                max = diff
            } else {
                continue
            }
        }
    }

    return {
        diff,
        left,
        right
    }
}
console.log(typeof findMax)

let { diff, left, right } = findMax([2, 4, 5, -3, -10])
console.log(diff, left, right)

/**
 *  0.1+0.2 = 0.3000000004
 */

// solution 1
function solution1(a, b) {
    var arrA = a.toString().split('.')
    var arrB = b.toString().split('.')

    var lengthOfA = (arrA[1] && arrA[1].length) || 0,
        lengthOfB = (arrB[1] && arrB[1].length) || 0
    var maxLen = lengthOfA >= lengthOfB ? lengthOfA : lengthOfB
    return (a + b).toFixed(maxLen)
}

// solution 2
function solution2(a, b) {
    var arrA = a.toString().split('.')
    var arrB = b.toString().split('.')

    var demicalOfA = arrA[1]
    var demicalOfB = arrB[1]

    var lengthOfA = (demicalOfA && demicalOfA.length) || 0,
        lengthOfB = (demicalOfB && demicalOfB.length) || 0

    var minLen = lengthOfA <= lengthOfB ? lengthOfA : lengthOfB

    var sum;
    var flag = false;
    var demicalSum = 0;
    var demicalArr = []
    for (var i = minLen - 1; i >= 0; i--) {
        demicalSum = demicalOfA[i] + demicalOfB[i]
        if (flag) sum++;
        if (sum >= 10) {
            sum = sum - 10

            flag = true
        } else {
            flag = false
        }
        demicalArr.push(sum)
    }
    
}