function maxSum(arr) {
    if (Math.max.apply(null, arr) <= 0) return Math.max.apply(null, arr)
    var len = arr.length;
    var sum = 0;
    var maxsum = -Infinity;
    var i;
    for (i = 0; i < len; i++) {
        sum += arr[i];
        if (sum > 0) {
            if (sum > maxsum) {
                maxsum = sum;
            }
        } else {
            sum = 0;
        }
    }
    return maxsum;
}
var arr = [-20, 10, 2, 4, 9, -2, -1, -1, -3, 10];
arr = [-10, -2]
console.log(maxSum(arr));