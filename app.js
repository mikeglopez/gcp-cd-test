const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(418).send("I'm a teapot").end();
});

module.exports = app
