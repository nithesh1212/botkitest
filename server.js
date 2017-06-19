var request = require('request-promise');
var Promise = require('bluebird');
var express = require('express');
var app = express();
var fs = require('fs');


app.get('/data/:fileName',function (req,res){

	var fileName = req.params.fileName;
	console.log(fileName);
	
	fs.readFile('./data/'+fileName,function(err,data){
		console.log(data);
		res.setHeader('Username','Nithesh');
		res.setHeader('Content-Type','application/json');
		res.setHeader('Accept','application.json');
			res.send(JSON.parse(data.toString()));

		});
});
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})