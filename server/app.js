const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static('../client'));
app.use(express.static('../app'));
app.use(express.static('../vendors'));


app.get('/api/:userName', (req, res) => {
    var query = "";

    for(var i in req.query){
        query += i + "=" + req.query[i] + "&";
    }

    http.get('http://'+req.params.userName+'.tumblr.com/api/read/json?'+ query, response => {

        response.setEncoding('utf8');
        var rawData = '';
        response.on('data', (chunk) => rawData += chunk);
        response.on('end', () => {
            try {
                res.setHeader('Content-Type', 'application/javascript');
                res.send(rawData);
            } catch (e) {
                console.log(e.message);
            }
        });
    }).on('error', (e) => {
        console.log(e.message);
    });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/../index.html'));
})

app.listen(80, () => {
    console.log('Example app listening on port 80!')
})
