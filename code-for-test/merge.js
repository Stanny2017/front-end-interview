/**
 * 1*1+2*2+3*3+...+n*n
 * 
 * 1 1
 * 2 1+2
 * 3 1+2+2
 * 第 n 天 1+2*2+3*3+...+(n-1-2-3)<n *
 */



//第 k 天总共应该拿多少钱

function countPrice(n) {
    let i = 1;// i 记录递增的工资
    let sum = 1; // sum 记录最后一次得到 i 工资数的的总天数
    let price = 1; // price 记录 sum 天得到的总工资数

    while (sum <= n) {
        i++;
        sum += i;
        price += i * i;
    }
    sum = sum - i;
    price = price - i * i;

    return price + (n-sum) * i 
}

console.log(countPrice(5))