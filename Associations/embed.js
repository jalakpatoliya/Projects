var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blogdemo",{
  useMongoClient:true
});

mongoose.Promise = global.Promise;

// POSTSCHEMA - title , content
var postSchema = new mongoose.Schema({
  title:String,
  content:String
})

var Post = mongoose.model("Post",postSchema);

// USERSCHEMA -name, email
var userSchema = new mongoose.Schema({
  name:String,
  email:String,
  posts:[postSchema]
})

var User = mongoose.model("User",userSchema);

User.findOne({name:"parth"},function (err,element) {
  if (err) {
    console.log(err);
  } else {
      element.posts.push({
        title:"algebra",
        content:"the magec  of algebra"
      })
      element.save(function(err,ele){
        if (err) {
          console.log(err);
        } else {
          console.log(ele);
        }
      })
  }
})





// var newUser = new User({
//   name:"parth",
//   email:"parthpatoliya@gmail.com"
// })
//
// newUser.posts.push({
//   title:"fudamentals of physics",
//   content:"mechanics of physics"
// })
//
// newUser.save(function(err,user){
//   console.log(user);
// });
