const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  throw new Error('Something went wrong!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});