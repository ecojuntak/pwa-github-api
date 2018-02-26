var express = require('express');
var path = require('path');
var http = require('http');
var serveStatic = require('serve-static');

app = express();

app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);