const http= require('http');
const server  = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the Home Page!\n');
  }
  else if (req.url === '/projects') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the projects Page!\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found\n');
  }
})
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
