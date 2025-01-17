const http = require('http');

const server = http.createServer((req, res) => {
  try {
    //Simulate an error
    throw new Error('Something went wrong!');
  } catch (err) {
    console.error('Error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});