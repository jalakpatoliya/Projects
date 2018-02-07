var mongoose = require("mongoose");

//Campground Schema
var campgroundSchema = new mongoose.Schema({
  name: String,
  url: String,
  description:String,
  author:{
    username:String,
    id: {
          type:mongoose.Schema.Types.ObjectId,
          ref:"User"
    }
  },
  comments:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment"
    }
  ]

});

var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;
