const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Demo");
});
 
module.exports.app = app;
