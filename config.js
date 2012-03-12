var express = require('express');
var Mongolian = require('mongolian');
var ejs = require('ejs');


exports.express = express;

exports.mongo = new Mongolian('localhost:27017/test');

exports.ejs = ejs;

exports.hostname = '0.0.0.0';

exports.port = 8888;
