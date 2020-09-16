
//先創一個空物件 把所有字母都拿出來  當物件裡面沒有的話 就擺進字母:1(else) 找到方法 Object.assign   如果有的話 就把後面數字++(if) 

input=['a', 'b', 'c', 'a', 'c', 'a','x' ];


function count(input){
    var sum={}                                  //空的物件
    for(let i=0 ;input.length > i ; i++){       //讓陣列裡面的都先用迴圈拿出來
        if (input[i] in sum){                   //如果input[i]有在sum裡面 就+1
            sum[input[i]]++
        }
        else {                                  //當迴圈每跑一次 sum{} 裡面沒有東西
            var letter={};                      //就會把字母:1擺進去
            letter[input[i]]=1;                 //每else 一次就會有一個字母:1 可是這樣會有4個物件{字母:1}
            sum = Object.assign(sum,letter)     //Object.assign比較像複製 letter是來源 sum是擺放的目標  最終會把四個物件 變成在sum{}裡面
        }
    }
    return sum
}


console.log(count(input))
//應該回傳 {'a':3, 'b':1, 'c':2, ‘x':1}

