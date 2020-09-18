
let input = [
 {key: 'a', value: 3},
 {key: 'b', value: 1},  
 {key: 'c', value: 2},
 {key: 'a', value: 3},
 {key: 'c', value: 5},
]

//給一個數列裡面有物件 key會有a~z value則不一定
//最後的output要是{key:value , key:value }
//如何把 key拿出來 如何把value拿出來
//key 拿出來方法:for 迴圈 input[i].key 全部key拿出來
//value拿出來方法 for迴圈 input[i].value 全部value就都會拿出來
//sum[input.[i].key]=input[i].value
//會輸出為最大數 可是不加總???
//思路  if如果有東西就+= 
//      else 沒有東西就把它給擺進去  
//      結果出來 其實它裡面擺放的都是key 並沒有value 
//     
function groupByKey(input){
    var sum={}                                          
    for (let i=0 ;input.length > i ; i++ ){             
        if (sum[input[i].key]){                         
            sum[input[i].key] += input[i].value
        }
        else {
            sum[input[i].key] = input[i].value        
        }
    }
    return sum
}
console.log(groupByKey(input))
// console.log(groupByKey(input));
// should print {'a':6, 'b':1, ‘c’:7}