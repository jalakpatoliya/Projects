var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
  username:String,
  password:String
})

userSchema.plugin(passportLocalMongoose); //Adds methods to user

var User = mongoose.model("User",userSchema);

module.exports = User;
