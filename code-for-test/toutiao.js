// var n = parseInt(readline());
// var i = 0;
// var arrX = [],//存放每张卡牌的x
//     arrY = [],//存放Y
//     sumX = 0,
//     sumY = 0, // 
//     lineCurrent;
// while (i < n) {
//     lineCurrent = readline().split(' ')
//     arrX.push(lineCurrent[0])
//     arrY.push(lineCurrent[1])
// }

// // 计算 arrX能不能被均分
// function canBeDivide(arr){

// }

function getMax(a, m, n) {
    let teamSum = 0,// 队伍数量
        teamNum = []; // 队伍人数数组
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (a[i][j] === 'used') continue;
            if (a[i][j] == 1) {
                a[i][j]='used'
                teamSum++;
                if (a[i - 1][j - 1] && a[i - 1][j - 1] == 1) {
                    a[i - 1][j - 1] = 'used'
                    teamNum[teamSum - 1]++;
                }
                if (a[i - 1][j] && a[i - 1][j] == 1) {
                    a[i - 1][j] = 'used'
                    teamNum[teamSum - 1]++;
                }
                if (a[i - 1][j + 1] && a[i - 1][j + 1] == 1) {
                    a[i - 1][j + 1] = 'used'
                    teamNum[teamSum - 1]++;
                }
                if (a[i][j - 1] && a[i][j - 1] == 1) {
                    a[i][j - 1] = 'used'
                    teamNum[teamSum - 1]++;
                }
                if (a[i][j + 1] && a[i][j + 1] == 1) {
                    a[i][j + 1] = 'used'
                    teamNum[teamSum - 1]++;
                }
                if (a[i + 1][j - 1] && a[i + 1][j - 1] == 1) {
                    a[i + 1][j - 1] = 'used'
                    teamNum[teamSum - 1]++;
                }
                if (a[i + 1][j] && a[i + 1][j] == 1) {
                    a[i + 1][j] = 'used'
                    teamNum[teamSum - 1]++;
                }
                if (a[i + 1][j + 1] && a[i + 1][j + 1] == 1) {
                    a[i + 1][j + 1] = 'used'
                    teamNum[teamSum - 1]++;
                }
            }
        }
    }
    return `${teamSum},${Max.max(teamNum)}`
}