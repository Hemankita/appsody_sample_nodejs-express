const app = require('express')()

app.get('/', (req, res) => {
  res.send("Welcome to the Kabanero 101");
});

module.exports.app = app;
