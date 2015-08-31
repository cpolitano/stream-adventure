// Part 7
// HTTP server

'use strict';

var http = require('http');
var through = require('through2');


var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function(body, _, next){
          this.push(body.toString().toUpperCase());
          next();
        })).pipe(res);
    } else {
      res.end();
    }
});

server.listen(parseInt(process.argv[2]));

