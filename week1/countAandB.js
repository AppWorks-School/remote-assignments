
let input = ['a', 'b', 'c', 'a', 'c', 'a', 'c','a']; 

function countAandB(input){
    let A =0;
    let B =0;
    for (i=0 ; input.length > i ; i++){
        if (input[i] == 'a') {
            A++;
        }
        if (input[i] == 'b'){
            B++
        }
    }
    console.log('總共有' + A + '個a')
    console.log('總共有' + B + '個b')
}


    console.log(countAandB(input));