
function delayedResult(n1,n2,delayTime,callback){   //各種參數
    setTimeout(function(){                          //設定時間延遲的function
        callback(n1+n2)                             //原本是可以直接console.log(n1+n2)直接改成callback(n1+n2) 
    },delayTime)                                    //第四個參數直接變成函數 可以對她做事情
}


delayedResult(4, 5, 3000, function(result) {        //前面的參數都給了 最後一個是callback
    console.log(result);                            //一定要為函數 等於他n1+n2的值現在function(result)<=result裡面
   });                                              

delayedResult(-5, 10, 2000, function(result) {
console.log(result);
});