'use strict';

var fs = require('fs');
var through = require('through2');
var split = require('split');

// IO

// Pipe data from process.stdin to process.stdout
fs.createReadStream(process.argv[2]).pipe(process.stdout);

//----------------------------//


// Part 4
// Transform and Split

// Transform stream using through2 module
// var stream = through(write, end);

var stream = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});

// Pipe input through transform stream, send to output
process.stdin.pipe(stream).pipe(process.stdout);

//------------------------------//


// Part 5
// Lines

var count = 0;

var stream = through( function(buffer, encoding, next) {
  var line = buffer.toString();
  if ( count % 2 === 0 ) {
    this.push(line.toLowerCase() + '\n');
  } else {
    this.push(line.toUpperCase() + '\n');
  }
  count++;
  next();
});

// Split input by line
process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);

//-------------------------------//



