// Steps:
// ->hey mongoose come here
// ->mongoose connect to cat_app database which is a  mondo database installed locally
// ->Mongoose create Schema({})
// ->Mongoose create collection
// ->Create instances of collection
// ->Save instances

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {
  useMongoClient: true
});
//It will connect to cat_app named db or if its not there it will create that db
mongoose.Promise = global.Promise; //So tha error do not come


var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
})

//This takes catschema and compile it into a model which returns us an object that has a bunch of methods like Cat.create() Cat.find() and many more
var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 11,
//   temperament: "Evil"
// })
//
// george.save(function(err, cat) {
//   if (err) {
//     console.log("Something went wrong");
//   } else {
//     console.log("We just saved a cat to the DB:");
//     console.log(cat);
//   }
// })

//Create and save cat all at once instead of var george = new Cat({..}) and then george.save(function(){})
Cat.create({
  name:"Snow white",
  age:7,
  temperament:"Bland"
},function(err,cat){
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
})




//Retrive all the cats from  the database and console.log each of them

Cat.find(function(err,cats){
  if (err) {
    console.log("OH no Error!");
    console.log(err);
  } else {
    console.log("All the cats");
    console.log(cats);
  }
})
