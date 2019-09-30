const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hi from Appsody! Testing");
});

module.exports.app = app;
