var express  = require('express');
var router   = express.Router();
var passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    mongoose              = require("mongoose"),
    User                  = require("../models/user"),
    expressSession        = require("express-session");
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //======================User=========================
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser()); // it reades, decodes information in session,encodes it
    passport.deserializeUser(User.deserializeUser());
    // Authorization ROUTES=============user=================
    // Show sign up form
    router.get("/register",function(req,res){
      res.render("register.ejs");
    })

    // handling user sign up
    router.post("/register",function(req,res){
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

    // LOGIN ROUTES============user=============
    // Render login form
    router.get("/login",function(req,res){
      res.render("login.ejs")
    })

    //login logic
    //MIDDLEWARE
    router.post("/login",passport.authenticate("local",{
      successRedirect:"/secret",
      failureRedirect:"/login"
    }),function(req,res){console.log(req.body.username);});


module.exports = router;
