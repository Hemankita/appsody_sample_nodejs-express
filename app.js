const app = require('express')()

app.get('/', (req, res) => {
  res.send("new namespace");
});

module.exports.app = app;
