const app = require('express')()

app.get('/:name', (req, res) => {
  res.send("Hello from " + req.params.name);
});
 
module.exports.app = app;
