var express = require('express');
var index = express();


index.get('/',function(req,res) {
    res.send('Hello , world');
});
index.listen(3000,function(){
    console.log('Server is working')
})