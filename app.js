var express = require("express");
var app = express();

//access to css and images used in site
app.use(express.static(__dirname + "/public"));

//ROUTES

app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/reviews", function(req, res){
  res.render("reviews.ejs");
});

// app.listen(3000, "127.0.0.1", function(){
//   console.log("Muan's Barber Shop has started!");
// });

// PORT Listening
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Muan's Barber Shop has started!");
});
