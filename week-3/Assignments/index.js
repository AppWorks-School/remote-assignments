var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.send('Hello , world');
});

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

app.use(express.static(__dirname + '/assignment-3'));


app.listen(3000,function(){
    console.log('Server is working')
})