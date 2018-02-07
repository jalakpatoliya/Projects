var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");


//INDEX - show all campgrounds in db
router.get("/campgrounds",function(req, res) { //To show campgrounds
  Campground.find({},function(err,allCampgrounds){
    if (err) {
      console.log(err);
    } else {
      res.render("./campgrounds/index.ejs", {campgrounds:allCampgrounds});
//      ./ -  in current folder in campgrounds folder
    }
  })
})

//CREATE ROUTE - To add new campgrounds to the db
router.post("/campgrounds",isLoggedIn,function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var authorId = req.user._id;
  var authorName = req.user.username;
  var authorDetails = {
    username:authorName,
    id:authorId
  }
  var newCampground = { name: name, url: image, description:desc, author:authorDetails}
  Campground.create(newCampground,isLoggedIn,function(err,campgrounds){
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  })
  // campgrounds.push(newCampground);
})

//NEW - To show form to create new campground
router.get("/campgrounds/new",isLoggedIn, function(req, res) { //To show the form that will send the data to Post route of campgrounds
  res.render("./campgrounds/new.ejs");
  //      ./ -  in current folder in campgrounds folder
})

//SHOW - shows more info about  one campground - it should be after /new otherwise new would be treated as id
router.get("/campgrounds/:id",function(req,res){
  Campground.findById(req.params.id).populate("comments").exec(function(err,camp){ //getting camp from   collection  campgrounds with same id
    if (err) {
      console.log(err);
    } else {
      console.log(camp);
      res.render("./campgrounds/show.ejs",{campground:camp});
      //      ./ -  in views folder in campgrounds folder
    }
  })
})

function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
// //To create campgrounds
// Campground.create({
//   name: "Manali",
//   url: "b.jpg",
//   description:"This is a beautiful place to visit, beautiful scrnario and chilled environment.Must visit place."
// }, function(err,campground){
//   if (err) {
//     console.log("Something went wrong.")
//   } else {
//     console.log(campground)
//   }
// })
