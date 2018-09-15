/**
 * 中位数
 */
var n = 6
var arr = [3,2,9,10,4,5]

arr.sort(function(a,b){
    return a-b
})
var left = Math.floor((n-1)/2)
// 如果为偶数
if(n%2===0){
    print((arr[left]+arr[left+1])/2)
}else{
    print(arr[left])
}