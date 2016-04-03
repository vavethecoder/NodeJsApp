//fs = require('fs');
//http = require('http');
//url = require('url');
//
//
//http.createServer(function (req, res) {
//    var img1 = fs.readFileSync('./images/1.jpg');
//    console.log('done');
//    var img2 = fs.readFileSync('./images/2.jpg');
//    console.log('done2');
//    res.writeHead(200, {'Content-Type': 'image/jpg'});
//    res.end(img1, 'binary');
//}).listen(8888);
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/get-images', function (req, res) {
    setTimeout(function () {
       res.send("/images/" + req.query.image + ".jpg");
    },1000);
//    res.send("/images/" + req.query.image + ".jpg");
});


app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});