//Created file path for html
var path = require("path");



module.exports = function(app) {
 //Making get requests to link to html pages client side
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/index.html"));
  });

  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/portfolio.html"));
  });

  app.get("/contact", (red, res) => {
    res.sendFile(path.join(__dirname, "../assets/contact.html"))
  })

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/index.html"));
  });
};