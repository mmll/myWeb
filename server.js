var http = require('http');
var express = require('express');
var app = express();


app.use(express.static('public/'));
app.use('/modules',express.static('node_modules/'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
})

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('server start')
});