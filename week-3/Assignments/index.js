var express = require('express');
var app = express();


//寫number以下的函數
//如果number=5 回傳1+2+3+4+5
//如果number='正整數' 回傳1+2+3...+正整數  


app.get('/',function(req,res) {
    res.send('Hello , world');
});

//卡關點 number無法用for計算?
app.get('/getData',function(req,res){
    var number = req.query.number
    
    if (number == null){                       
        res.send("Lack of Parameter");
    }

    else if (number == '正整數'){
        res.send('1+2+....+正整數')
    }
    else if (!isNaN(number) == true){           
        var result=''
        for( let i=1 ; number >= i ; i++){
            result += i+'+'
        }
        last=result.substring(0,result.length-1)   //刪除最後一個字元
        res.send(last)
    }

    else {
        res.send("Wrong Parameter")
    }
}
)
app.listen(3000,function(){
    console.log('Server is working')
})