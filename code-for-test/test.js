// function fn(n, o) {
//     console.log(o);
//     return function (m) {
//         return fn(m,n);
//     }
// }

// var a = fn(0)
// a(1)
// a(2)


function getMaxVal(a, b, c) {
    var r1 = a + b * c,
        r2 = a * (b + c),
        r3 = a * b * c,
        r4 = (a + b) * c;
    return Math.max(r1, r2, r3, r4);

}
//console.log(getMaxVal(1,2,3))


var num1 = 4, num2 = 3, num3 = 8;
var str = 'a'.repeat(num1).concat('z'.repeat(num2)).split('');
var i = 2;
while (i <= num3) {
    str = change(str);
    i++;
}
console.log(str);

function change(str) {
    var arr = selectIndex(str);
    var index1 = arr[0];
    var index2 = arr[1];
    var tmp = str[index2];
    str[index2] = str[index1];
    str[index1] = tmp;
    return str;
}

function selectIndex(str) {
    var firstStr = str;
    var index = firstStr.lastIndexOf('a');
    var substr = str.slice(index);
    while (substr.indexOf('z') == -1) {
        firstStr = firstStr.slice(0, index);
        index = firstStr.lastIndexOf('a');
        substr = str.slice(index);
    }
    var secondIndex = index + substr.indexOf('z');
    return [index, secondIndex];
}