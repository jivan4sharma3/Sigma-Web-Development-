// var slugify = require('slugify')

// let a = slugify('some string') // some-string
// console.log(a)

// if you prefer something other than '-' as separator
// let b = slugify('some string', '_')  // some_string
// console.log(b)


const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<h1> Hello World </h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 