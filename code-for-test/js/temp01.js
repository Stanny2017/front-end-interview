/**
 * 合并链表
 * /*function ListNode(x){
   this.val = x;
   this.next = null;
}*/
function Merge(pHead1, pHead2) {
    var node1 = pHead1,
        node2 = pHead2;
    var result = [];
    while (node1.next && node2.next) {
        if (node1.val <= node2.val) {
            result.push(node1);
            var length = result.length;
            if (length > 0) {
                result[length - 2] = result[length - 1];
            }
            node1 = node1.next;
        } else {
            result.push(node2);
            if (result.length > 0) {
                result[length - 2] = result[length - 1];
            }
            node2 = node2.next;
        }
    }
    if (node1.next) {
        result[result.length - 1].next = node1.next;
    } else {
        result[result.length - 1].next = node2.next;
    }

    return result[0];
}

/**
 * 100 个字母  abc
 * 找最短包含 a b c
 * [a,a,c,a,a,a,b,b,b,c]
 */
var a = "a";
var b = "b";
var c = "c";

var arr = [a, a, b, c, c, c, b, a, c, a];

var left = 0;

var right = 0;

var tempArr = [arr[0]];
var indexArr = [];
var current;
var min = Infinity;
for (var i = 1; i < arr.length; i++) {

    if (tempArr.length === 3) {
        // 满足条件的一个序列
        indexArr.push([left, right]);
        if (right - left < min) {
            min = right - left;
        }
        tempArr.shift();
        left++;
    }

    current = arr[i];
    if (tempArr.indexOf(current) === -1) {
        tempArr.push(current);
        right = i;
    }
}
console.log(min);
console.log(indexArr);
