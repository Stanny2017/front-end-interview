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

console.log(combineArray([],[0, 2, 4, 67, 100]))

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
console.log(mergeArr(arr1, arr2));