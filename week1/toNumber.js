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