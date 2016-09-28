var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html',function(req,res){
	res.sendFile('/home/mli1/Deskport/myWork/myWeb'+"/index.html");
})

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('server start')
});