const app = require('express')()

app.get('/', (req, res) => {
  res.send("hi !!! appsody sample nodejs express");
});

module.exports.app = app;
