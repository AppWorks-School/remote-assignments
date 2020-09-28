// function delayedResult(n1, n2, delayTime, callback) {
//     // your code here
//     }
//     delayedResult(4, 5, 3000, function(result) {
//      console.log(result);
//     }); // 9 (4+5) will be shown in the console after 3 seconds
//     delayedResult(-5, 10, 2000, function(result) {
//      console.log(result);
//     }); // 5 (-5+10) will be shown in the console after 2 seconds 

//call back簡單的說，如果你使用了某個function，那麼你就是『call』了一個function。
//如果系統或是函式是要求你給一個function pointer，這個function pointer指到一個實際的函式(多半這個函式是你自己寫的)。
//然後它會在適當的時間呼叫此function，則此function就是所謂的 callback function。因為這個function是被『callback』了。

function delayedResult (n1,n2,delayTime,result) {   //丟進去n1 n2 跟 delayTime 
    console.log(result(n1,n2,delayTime))            //
}

function result(n1,n2,delayTime){   //此函數會給delayedResult使用
    setTimeout(function(){            //有n1,n2,跟延遲時間計算
        console.log(n1+n2)             //時間過完會打印出來
    },delayTime)
}

console.log(delayedResult(4,5,3000,result))

console.log(delayedResult(-5,10,2000,result))