var mongoose               = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var AdminSchema = new mongoose.Schema({
  username : String,
  password : String
})

AdminSchema.plugin(passportLocalMongoose); // plugin connects all the passportLocalMongoose mehtods to UserSchema

module.exports = mongoose.model("Admin",AdminSchema);
