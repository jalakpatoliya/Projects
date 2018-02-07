var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment    = require("./models/comment"),
    seedDB      = require("./seeds"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    User          = require("./models/user");

var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp_v3", { useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname+"/public"));
console.log(__dirname);

 seedDB(); //to seed the data

//PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret:"Rusty is a cute dog again.",
  resave:false,
  saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// create session
// start passport
// start session in passport
// authenticate user in session using LocalStrategy
// serialize user
// deserialize user

app.use(function(req,res,next){
  res.locals.currentUser=req.user; // whatever is in res.locals is available in all templates
  next();
})

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);

app.listen(3823, function() {
  console.log("server started");
})
