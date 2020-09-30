var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs')



app.get('/',function(req,res) {
    res.send('Hello , world');
});

app.get('/getData',function(req,res){
    var number = req.query.number;
    res.setHeader("Access-Control-Allow-Origin", "*")
    if (number == null ){
        res.send("Lack of Parameter");
    }else if (!isNaN(number) == true){
        var result=0
        for( let i=1 ; number >= i ; i++){
            result += i
        }   
        res.json(result)  
    }else {
        res.send("Wrong Parameter");
    }
});

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

//開啟搭建窗口到靜態文件html
app.get('/myName',function(req,res){
    res.sendFile(__dirname+"/"+"public"+"/"+"myName.html")     
})

//重新導向網頁 判斷輸入帳號 並可以顯示name
app.get('/trackName',function(req,res){ 
    var url=req.url
    var user=req.query.name
    res.cookie('name',user)
    if (user == 1234){
        res.redirect('myName')
    }else {
        res.send('請乖乖輸入1234唷')
    }
    
    
})



app.use(express.static(__dirname + '/public'));


app.listen(3000,function(){
    console.log('Server is working')
})