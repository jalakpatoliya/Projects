var mongoose = require("mongoose");

// POSTSCHEMA - title , content
var postSchema = new mongoose.Schema({
  title:String,
  content:String
})

var Post = mongoose.model("Post",postSchema);

module.exports = Post;

// OR module.exports = mongoose.model("Post",postSchema);
// exports is necessary as js needs to tell which function it has to send else require will give just an empty file
// Also mongoose is required to be imported in each modules
