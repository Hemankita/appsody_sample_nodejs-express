const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hi hi hi from Appsody! Testing");
});

module.exports.app = app;
