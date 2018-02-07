var mongoose = require("mongoose");

// USERSCHEMA -name, email
var userSchema = new mongoose.Schema({
  name:String,
  email:String,
  posts:[{
    type:mongoose.Schema.Types.ObjectId,  //its a mongoose objectId belonging to Post
    ref:"Post"
  }]
})

var User = mongoose.model("User",userSchema);

module.exports = User;

// Here we are returning User from the file but we can also export objects{} or something else
