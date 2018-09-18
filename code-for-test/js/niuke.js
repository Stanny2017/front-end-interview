/**
 * 牛客网 剑指 offer 刷题
 */
/**
 *  二维数组：向下和向右递增，以最快的速度找 k 值
 * 思路：找到合适的初始位置，正难则反
 *
 */

function Find(target, arr) {
    var i = arr.length - 1,
        j = 0;
    var lenX = arr[0].length;
    while (i >= 0 && j < lenX) {
        if (target > arr[i][j]) {
            j++;
        } else if (target < arr[i][j]) {
            i--;
        } else {
            return true;
        }
    }
    return false;
}

/**
 * 
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 * head 为头结点，头结点中也存数据
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 思路： 递归；
 * while 循环终止条件：结点为 null（尾指针指向null）
 */
function printListFromTailToHead(head) {
    // write code here
    var result = []
    var node = head

    while (node) {
        result.push(node.val)
        node = node.next;
    }

    return result.reverse()
}

/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列[1,2,4,7,3,5,6,8]和中序遍历序列[4,7,2,1,5,3,8,6]，则重建二叉树并返回。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// if pre or vin is [] return null;
/**
 * 思路： 判断序列长度情况
 * length == 0; return null
 * length == 1; return 叶子结点
 * length >1 ； 递归循环
 */
function reConstructBinaryTree(pre, vin) {
    // write code here
    var result = null;
    if (pre.length === 1) {
        result = {}
        result.val = pre[0]
        result.left = null
        result.right = null
    } else if (pre.length > 1) {
        result = {}
        result.val = pre[0]
        var leftIndex = vin.indexOf(pre[0])
        var leftTree = vin.slice(0, leftIndex)

        result.left = reConstructBinaryTree(pre.slice(1, 1 + leftTree.length), vin.slice(0, leftIndex))
        result.right = reConstructBinaryTree(pre.slice(1 + leftTree.length), vin.slice(leftIndex + 1))
    }
    return result;
}

/**
 * 
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 *  输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 *  NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

/**
 * 定义left right 两个指针，分别在前后两个有序数组里，通过找二叉查找不断缩小查找范围
 * 查询终止：left + 1 = right 
 */
function minNumberInRotateArray(arr) {
    // write code here
    var len = arr.length
    if (len === 0) return 0
    else {
        var left = 0,
            right = len - 1;


        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (left + 1 === right) {
                break;
            } else {
                if (arr[mid] > arr[left]) {
                    left = mid;
                } else {
                    right = mid;
                }
            }
        }
        return arr[right]
    }
}

/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）
 */

function jumpFloor(number) {
    // write code here

    var arr = [1, 2];

    for (var i = 2; i < number; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[number - 1]
}
/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，
 * 总共有多少种方法？
 */
function rectCover(number) {
    // write code here
    if (number === 1) return 1
    if (number === 2) return 2
    return rectCover(number - 1) + rectCover(number - 2)

}

/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 * & 操作符的巧用
 */
function NumberOf1(n) {
    var count = 0;
    while (n) {
        count++;
        n = n & (n - 1)
    }
    return count
}

console.log(NumberOf1(-1))

/**
 * 实现 Marh.power(n,m)
 */
function Power(base, exponent) {
    // write code here
    var result = 1
    if (exponent === 0) return 1
    if (exponent > 0) {
        while (exponent) {
            result *= base
            exponent--;
        }
    } else {
        exponent = -exponent;
        while (exponent) {
            result *= base
            exponent--;
        }
        result = 1 / result
    }


    return result
}

/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */
/**
 * 思路： 冒泡排序 稳定
 * 每一趟排序都唯一确定了末尾的那个元素的位置
 */
function reOrderArr(arr) {
    var len = arr.length
    // n个数需要进行 n-1 次排序
    for (var i = 0; i < len - 1; i++) {
        // 每次内部循环只从0 到 len-i（-1）
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] % 2 === 0 && arr[j + 1] % 2 === 1) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

/*function ListNode(x){
   this.val = x;
   this.next = null;
}*/

function FindKthToTail(head, k) {
    // write code here
    // 先定义一个数组存储链表中所有的节点
    var nodeList = []
    var node = head
    while (node) {
        nodeList.push(node)
        node = node.next
    }
    return nodeList.reverse()[k - 1]

}

/**
 * 输入一个链表，反转链表 输出表头
 * 思路（改变指向）
 */

/*function ListNode(x){
   this.val = x;
   this.next = null;
}*/
function ReverseList(head) {
    // write code here
    // 一定要考虑特殊情况，这里指的是当前为空
    if (!head) return head
    // 先定义一个数组存储链表中所有的节点
    var nodeList = []
    var node = head
    while (node) {
        nodeList.push(node)
        node = node.next
    }
    // 翻转节点顺序
    nodeList.reverse()
    var len = nodeList.length

    for (var i = 0; i < len - 1; i++) {
        nodeList[i].next = nodeList[i + 1]
    }
    nodeList[len - 1].next = null;
    return nodeList[0]
}

/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，
 * 当然我们需要合成后的链表满足单调不减规则。
 */



// 简单思路： 暴力合并再排序，再连接顺序
function Merge(pHead1, pHead2) {
    if (pHead1 === null && pHead2 === null) return null
    var putInArr = function (node) {
        var arr = []
        while (node) {
            arr.push(node)
            node = node.next
        }
        return arr
    }

    var arr1 = putInArr(pHead1)
    var arr2 = putInArr(pHead2)

    var arr = arr1.concat(arr2)
    arr.sort(function (a, b) {
        return a.val - b.val
    })

    for (var i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1]
    }
    arr[arr.length - 1].next = null;
    return arr[0]
}

/**
 * 换瓶子 3 个瓶子换一瓶水，n 总共能喝几瓶水
 */

// 3个空瓶子换一个瓶子,最后能喝几瓶水
function change(n) {
    var origin = n
    var count = 0
    while (n >= 3) {
        n = n - 3
        n++
        count++
    }
    return count + origin
}
console.log(change2(4))

function change2(n) {
    var origin = n,
        count = 0;
    var everyChange,
        afterChange
    while (n >= 3) {
        everyChange = Math.floor(n / 3)
        count += everyChange
        afterChange = n - everyChange * 3 + everyChange
        n = afterChange
    }
    return origin + count
}

