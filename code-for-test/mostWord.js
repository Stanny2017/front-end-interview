/**
 * 找重复次数最多的字符
 */

function findMaxStr(str) {
    let obj = {}
    let maxWord='',
        maxNum=0;
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    maxNum = Math.max.apply(null,Object.values(obj))
    maxWord = Object.keys(obj)[Object.values(obj).indexOf(maxNum)]
    return `most times word is ${maxWord},occurs ${maxNum} times!`
}
console.log(findMaxStr('3333333ff3333wer33334444rrrrrrrrrrrrrrrr'))