var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
        {
          name:"first camp",
          url :"a.jpg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name:"Second camp",
          url :"b.jpg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name:"Third camp",
          url :"c.jpg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
]

function seedDB() {
//Remove all campgrounds
  Campground.remove({},function(err){
  //   if (err) {
  //     console.log(err);
  //   }else {
  //     console.log("campground removed");
  //     // Add few campgrounds
  //       data.forEach(function(seed){
  //         Campground.create(seed,function(err,campground){
  //           if (err) {
  //             console.log(err);
  //           } else {
  //             console.log("Campground added!!");
  //             //create a comment
  //             Comment.create({
  //               text:"This is a good place,wish was internet here.",
  //               author:"Homer"
  //             },function(err,cmnt){
  //               if (err) {
  //                 console.log(err);
  //               } else {
  //                 campground.comments.push(cmnt);
  //                 campground.save();
  //                 console.log("Created a new comment");
  //               }
  //             })
  //           }
  //         })
  //       })
  //   }
  })


}

module.exports = seedDB;
