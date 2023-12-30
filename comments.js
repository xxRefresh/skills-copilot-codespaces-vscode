//create web server
var express = require('express');
var app = express();
var fs = require("fs");

//get all comments
app.get('/listComments', function (req, res) {
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

//add new comment
app.get('/addComment', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment4"] = req.query.comment;
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//delete a comment
app.get('/deleteComment', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["comment" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//update a comment
app.get('/updateComment', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment" + 2] = req.query.comment;
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//create a server
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    
    //console.log("Example app listening at http://%s:%s", host, port)
    console.log("Server is running at http://const express = require('express');");
});
