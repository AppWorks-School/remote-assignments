var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

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
        last=result.substring(0,result.length-1)   
        res.send(last)
    }

    else {
        res.send("Wrong Parameter")
    }
}
)

// assignment -3.4
app.post('/sum',urlencodedParser,function(req,res){
    console.log('namber:',req.body.num)
    var number = req.body.num
    var total=0
    for (let i=0 ; number >=i ; i++){
        total+=i
    }
    res.send('答案是'+total)
})



app.use(express.static(__dirname + '/public'));


app.listen(3000,function(){
    console.log('Server is working')
})