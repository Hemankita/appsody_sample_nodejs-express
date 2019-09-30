const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello hema from Appsody! Testing");
});

module.exports.app = app;
