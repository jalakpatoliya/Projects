var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blogdemo_2",{
  useMongoClient:true
});

mongoose.Promise = global.Promise;

var Post = require("./models/post");  // ./ is current folder
var User = require("./models/user");



// User.create({
//   name:"bob",
//   email:"bob@gmail"
// },function(err,user){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// })
//
// Post.create({
//   title:"th meum part.-3",
//   content:"fdakljlksdajfl"
// },function(err,post){
//   if (err) {
//     console.log(err);
//   } else {
//       User.findOne({name:"bob"},function(err,foundUser){
//         if (err) {
//           console.log(err);
//         } else {
//             foundUser.posts.push(post); //create post,finduser,link  post
//             foundUser.save(function(err,savedUser){
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(savedUser);
//               }
//             })
//           }
//         })
//     }
//   })
// 
// User.findOne({name:"bob"}).populate("posts").exec(function(err,user){
//   // find user ,expand posts,execute it
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// })
