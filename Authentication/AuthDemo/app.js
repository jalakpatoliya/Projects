var express               = require("express");
    app                   = express(),
    bodyParser            = require("body-parser"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    mongoose              = require("mongoose"),
    User                  = require("./models/user"),
    expressSession        = require("express-session");


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.use(expressSession({
  secret:"Rusty is the best dog in the world", // is used to enco-deco information in the session
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize()); // always needed to use the passport methods
app.use(passport.session());




mongoose.connect("mongodb://localhost/auth_demo",{
  useMongoClient:true
})
mongoose.Promise = global.Promise;

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); // it reades, decodes information in session,encodes it
passport.deserializeUser(User.deserializeUser());
//============
// ROUTES
//============

app.get("/",function(req,res){
  res.render("home.ejs");
})

app.get("/secret",isLoggedIn,function(req,res){ //
  res.render("secret.ejs");
})

// Authorization ROUTES

// Show sign up form
app.get("/register",function(req,res){
  res.render("register.ejs");
})

// handling user sign up
app.post("/register",function(req,res){
    User.register(new User({username: req.body.username}),req.body.password,function(err,user){
      if (err) { // password is hashed by resiter and then saved in DB
        res.send(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req,res,function(){ // local can be replaced by twitter or fb
          res.redirect("/secret");      //but here we are authenticating locally
        })
      }
    })
})

// LOGIN ROUTES
// Render login form
app.get("/login",function(req,res){
  res.render("login.ejs")
})

//login logic
//MIDDLEWARE
app.post("/login",passport.authenticate("local",{
  successRedirect:"/secret",
  failureRedirect:"/login"
}),function(req,res){});

//logout route
app.get("/logout",function(req,res){
  req.logout();
  res.redirect("/");
})

//authenticating if user is loggedin or not
function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()){
    console.log("is authenticated is true");
    return next();
  }

  console.log("is authenticated is false");
    res.redirect("/login");


}

app.listen(3823,function(){
  console.log("server connected");
})
