const express = require('express');
const mysql = require('mysql');

const app= express();


//靜態文件首頁
app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+'public'+'/'+'home.html')
})

//靜態文件註冊
app.get('/sign-up',function(req,res){
    res.sendFile(__dirname+'/'+'public'+'/'+'sign-up.html')
})
//靜態文件登陸成功
app.get('/OK',function(req,res){
    res.sendFile(__dirname+'/'+'public'+'/'+'OK.html')
})

//創mysql連接
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'assignment'
})
//連接
db.connect(function(err){
    if (err){
        throw(err);
    }
    console.log('mysql connect');
})


//登陸資料  
app.get('/data',function(req,res){
    var email = req.query.email
    var password=req.query.password
    //下方mysql 查詢是否有email跟password同時相等的東西
    var selectSQL = "select * from user where email ='"+email+"' and password='"+password+"'";
    //下方開始登陸且查詢
    db.query(selectSQL,function(err,result){
        if (err) throw err;
        //下面是登陸失敗(比對不到東西)
        if (result == ''){
            res.sendFile(__dirname+"/"+"public"+"/"+"NOT_OK.html")
        }
        //下面是登陸成功
        else {
            console.log(result);
            console.log('登陸成功');
            res.sendFile(__dirname+"/"+"public"+"/"+"OK.html")
        }
    })
})


//下方是創建帳戶  還缺比對帳戶是否使用過
app.get('/sign-upp',function(req,res){
    var email = req.query.email;
    var password = req.query.password;
    //下方這個資料key是對應sql的key email 後面的email是使用者輸入的email 同理password
    var user = {email:email,password:password};
    //用sql語法插入上面的物件 比對到email跟password 新增他們
    db.query('insert into user set ?',user,function (err,result){
        if (err) throw err;
        console.log('ok')
        //下面會跑出此次成功的資料
        console.log(result)
        //成功就導回首頁
        res.sendFile(__dirname+'/'+'public' +'/'+'home.html')
    })
})

app.listen('3000',function(){
    console.log('server is start!')
})

//1.在home page 匹配mysql現有email與password  登陸成功 換個歡迎頁面 失敗 innerhtml登陸失敗

//2.當在sign up 提交表格 驗證mysql有沒有相同的email 
//如果沒有就新增 新增完成跳轉回home page


