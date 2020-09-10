// 1. countAandB: count how many ‘a’ and ‘b’ letters in the given input and return the total
// number.
// 2. toNumber: convert English letter to number, let ‘a’ to be 1, ‘b’ to be 2 and so on.
// In both questions, you will only get ‘a’, ‘b’, ‘c’, ‘d’ or ‘e’ in the input array. 
// function countAandB(input) {
//     // your code here
//     }
//     function toNumber(input) {
//     // your code here
//     }
//     let input1 = ['a', 'b', 'c', 'a', 'c', ‘a’, ’c’];
//     console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
//     console.log(toNumber(input1); // should print [1, 2, 3, 1, 3, 1, 3]
//     let input2 = ['e', ‘d', 'c', 'd', 'e'];
//     console.log(countAandB(input2)); // should print 0
//     console.log(toNumber(input2); // should print [5, 4, 3, 4, 5]

//a=1 b=2 c=3 d=4 e=5 回傳至數列
let input = ['e', 'd', 'c', 'd', 'e',];

function toNumber(input){
    const sum =new Array;
    for (let i=0 ; input.length>i ; i++){
        if (input[i] == 'a'){
            sum.push(1);
        }
        else if (input[i] == 'b'){
            sum.push(2);
        }
        else if (input[i] == 'c'){
            sum.push(3);
        }
        else if (input[i] == 'd'){
            sum.push(4);
        }
        else if (input[i] == 'e'){
            sum.push(5);
        }    
    }
    console.log(sum)
}



console.log(toNumber(input))