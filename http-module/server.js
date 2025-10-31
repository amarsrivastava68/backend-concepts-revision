const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req , 'this is the request object .')
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello, World!\n');
})
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})