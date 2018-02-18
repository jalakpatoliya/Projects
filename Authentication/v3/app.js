var express               = require("express");
    app                   = express(),
    bodyParser            = require("body-parser"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    mongoose              = require("mongoose"),
    Admin                  = require("./models/admin"),
    User                  = require("./models/user"),
    userRoute             = require('./routes/userRoute'),
    adminRoute             = require('./routes/adminRoute'),
    expressSession        = require("express-session");

    mongoose.connect("mongodb://localhost/auth_demo",{
      useMongoClient:true
    })
    mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
//=========================================================
//=============Initializing Session & Passport=============
//=========================================================
app.use(expressSession({
  secret:"Rusty is the best dog in the world", // is used to enco-deco information in the session
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize()); // always needed to use the passport methods
app.use(passport.session());
//=========================================================
//=============Admin and User routes=======================
//=========================================================
app.use(userRoute);
app.use(adminRoute);
//=========================================================
//=============Normal Routes===============================
//=========================================================
app.get("/",function(req,res){
  res.render("home.ejs");
})

app.get("/secret",isLoggedIn,function(req,res){ //
  console.log(req.user.username);
  res.render("secret.ejs");
})
//=========================================================
//=============Authenticating function=====================
//=========================================================
//authenticating if user is loggedin or not
function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()){
    console.log("is authenticated is true");
    return next();
  }
  console.log("is authenticated is false");
    res.redirect("/Adminlogin");
}
//=========================================================
//=============Logout route================================
//=========================================================
app.get("/logout",function(req,res){
  req.logout();
  res.redirect("/");
})

//=========================================================
//=============Listening to port===========================
//=========================================================
app.listen(3823,function(){
  console.log("server connected");
})
