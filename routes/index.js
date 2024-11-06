var express = require('express');
var router = express.Router();
var connect = require('connect')
var app = connect

function helloworld(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello World")
}
app.use('/hello', helloword);
app.listen(3000)

/* GET index page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about us page. */
router.get('/aboutus', function (req, res, next) {
  res.render('index', { title: 'About Us' });
});
/* GET Product page. */
router.get('/product', function (req, res, next) {
  res.render('index', { title: 'Product' });
});
/* GET Services page. */
router.get('/service', function (req, res, next) {
  res.render('index', { title: 'Service' });
});
/* GET contact me page. */
router.get('/contactus', function (req, res, next) {
  res.render('index', { title: 'Contact us' });
});

module.exports = router;

const { createServer } = require('http');

const hostname = '127.0.0.1';
const express = require('express');
const app = express();
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
  console.log("Node.js is working!")
});
