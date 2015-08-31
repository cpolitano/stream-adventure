// Part 6
// Concat

'use strict';

var concat = require('concat-stream');

process.stdin.pipe(concat(function(data){
  var s = data.toString().split('').reverse().join('');
  console.log(s);
}));