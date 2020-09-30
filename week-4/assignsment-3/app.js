const express = require('express');
const mysql = require('mysql');

const app= express();

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
    console.log('mysql connect..');
})

app.get('/home',function(req,res){
    res.sendFile(__dirname+'/'+'public'+'/'+'home.html')
})


app.get('/sign-up',function(req,res){
    res.sendFile(__dirname+'/'+'public'+'/'+'sign-up.html')
})


app.listen('3000',function(){
    console.log('server is start!')
})