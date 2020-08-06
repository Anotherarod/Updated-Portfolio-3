//Created file path for html
var path = require("path");



module.exports = function(app) {
 //Making get requests to link to html pages client side
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/index.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/portfolio.html"));
  });

 
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/index.html"));
  });
};