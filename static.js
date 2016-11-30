// Copyright (c) 2016 Rafał Pocztarski
// Released under MIT License (Expat) - see:
// https://github.com/rsp/node-static-http-servers/blob/master/LICENSE.md

var info = 'node-static-http-servers by Rafał Pocztarski\n'
         + 'Examples of HTTP static file serving in Node.js\n'
         + 'See: https://github.com/rsp/node-static-http-servers\n'
         + 'Example using: express.static';

var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});

console.log(info);
