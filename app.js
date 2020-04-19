const http = require('http');
const fs = require('fs');

var request;
var response;

var server = http.createServer(getFromClient);
server.listen(3000);
console.log('Server start!');

// createServerの処理
function getFromClient(req, res) {
  request = req;
  response = res;
  fs.readFile('./index.html', 'UTF-8', writeToResponse);
}

// readFile完了後の処理
function writeToResponse(error, data) {
  var content = data.replace(/dummy_title/g, 'タイトルです').replace(/dummy_content/g, 'これがコンテンツです。')
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(content);
  response.end();
}
