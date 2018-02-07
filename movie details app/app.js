var express = require("express");
var app = express();
var request = require("request");

app.get("/",function(req,res){
  res.render("search.ejs");
})

app.get("/results",function(req,res){
   var query = req.query.query;
   var url="http://theapache64.xyz:8080/movie_db/search?keyword="+query;
  request(url,function(error,response,body){
      var details=JSON.parse(body);
      res.render("results.ejs",{details:details});
  })
})

app.listen(3823,function(){
  console.log("server started...");
})
