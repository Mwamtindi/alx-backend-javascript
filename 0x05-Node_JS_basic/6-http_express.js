const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.listen(port, () => {
  // test   
});

module.exports = app;

// test = console.log(`Example app listening at http://localhost:${port}`);
