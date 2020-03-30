const app = require('express')()

app.get('/:name', (req, res) => {
  res.send("Astra Honda wish you have a great day " + req.params.name);
});
 
module.exports.app = app;
