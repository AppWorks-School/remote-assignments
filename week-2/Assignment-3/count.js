
//先創一個空物件 把所有字母都拿出來  當物件裡面沒有的話 就擺進字母:1(else)   如果有的話 就把後面數字++(if) 

input=['a', 'b', 'c', 'a', 'c', 'a','x' ];


function count(input){
    var sum={}
    for(let i=0 ;input.length > i ; i++){
        if (input[i] in sum){
            sum[input[i]]++
        }
        else {
            var letter={};
            letter[input[i]]=1;
            sum = Object.assign(sum,letter)
        }
    }
    return sum
}


console.log(count(input))
//應該回傳 {'a':3, 'b':1, 'c':2, ‘x':1}

