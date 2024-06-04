// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000/
// Comment form is displayed
// Enter a comment and submit
// Comment is displayed at the bottom of the page

var http = require('http');
var fs = require('fs');
var qs = require('querystring');

http.createServer(function (req, res) {
  if (req.method === 'GET') {
    fs.readFile('comments.html', function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (req.method === 'POST') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });
    req.on('end', function () {
      var post = qs.parse(body);
      fs.appendFile('comments.html', post.comment + '<br>', function (err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(post.comment);
      });
    });
  }
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');

// comments.html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Comments</title>
// </head>
// <body>
//   <h1>Comments</h1>
//   <form method="post" action="/">
//     <textarea name="comment"></textarea><br>
//     <input type="submit" value="Submit">
//   </form>
// </body>
// </html>

// Run: node comments.js
// Open browser: http://localhost:3000/
// Comment form is displayed
// Enter a comment and submit
// Comment is displayed at the bottom of the page

// Path: comments.js
// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000/
// Comment form is displayed
// Enter a comment and submit
// Comment is displayed at the bottom of the page

// Path: comments.js
// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000/
// Comment form is displayed
// Enter a comment and submit
// Comment is displayed at the bottom of the page

// Path: comments.js
// Create web server
// Run: node comments.js

