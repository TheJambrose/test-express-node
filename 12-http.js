const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  } else if (req.url === '/about') {
    res.end('Here is the about page');
  } else {
    res.end(`
    <html>
    <h1>Ooops!</h1>
    <p>Looks like the page you are looking for can't be found!</p>
    <p>Please try one of the following:</p>
    <ul>
    <li>our about us page at <a href="http://localhost:5800/about">our about us page </a></li>
    <li>Or you could mind your own business</li>
    </ul>
    </html>
  `);
  };
});

server.listen(5800);