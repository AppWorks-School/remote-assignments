
//找數列位置 一樣用for回圈 找出每個數字 之後用target比對 如果相等 回傳位置到console.log 如果沒有 直接console.log(-1) 
//for迴圈 當i=0 numbers裡面有5個數字 numbers.length就會是5 如果比i大 就會把numbers的數字都拿出來跑一次 所以numbers長度是5 i會跑0~4
//所以比對正確 會剛好是位置的地方 直接回傳i 如果比對都不正確 回傳-1 
//<<<<卡關 回傳-1部分 如果直接用else return-1 剛開始比對第一個數字 就會直接跳到else 不會繼續比對下一個數字 程式中止 (解決=>迴圈跑完沒東西沒動作 直接在外面直接回傳-1)
//回傳第一個位置=> if只會跑到配對正確的第一個 就會停止程式碼 所以只會回傳第一個數字的位置


function findPosition(numbers,target) {
    for (let i=0 ; numbers.length > i ; i++){
        if (numbers[i] == target){
            return i    
        }
    }
    return -1
}


console.log( findPosition([5, 2, 7, 1, 6], 5) )
console.log( findPosition([5, 2, 7, 1, 6], 1) )
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) )
console.log( findPosition([5, 2, 7, 1, 6], 8) )