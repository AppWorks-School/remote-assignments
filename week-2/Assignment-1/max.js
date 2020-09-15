
//取數列最大值 先創一個空數列 裡面擺放數列number的第一個值 如果比空數列大 就往裡面擺 
var numbers = [ 1, 2,99, 4 ,5,10,]

function max(numbers) {
    var maxmax = numbers[0]                         //空數列
    for (let i = 0 ; numbers.length > i ; i++){     //for 迴圈 跑每一個數字
        if (numbers[i] > maxmax){                   //比對數字
            maxmax = numbers[i]                     //比較大就放進數列
        }
    }
    return maxmax                                   //回傳最大值
}



console.log(max(numbers))