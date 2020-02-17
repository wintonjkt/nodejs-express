const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from IBM<br>");
  res.send("<br>");
  res.send("My name is Winton and we can help you with your microservices journey<br>");
});
 
module.exports.app = app;
