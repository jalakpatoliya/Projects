var express  = require('express');
var router   = express.Router();
var passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    mongoose              = require("mongoose"),
    Admin                  = require("../models/admin"),
    expressSession        = require("express-session");

    //==========================================================================
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //==========================================================================
    //======================Admin=========================
    passport.use(new LocalStrategy(Admin.authenticate()));
    passport.serializeUser(Admin.serializeUser()); // it reades, decodes information in session,encodes it
    passport.deserializeUser(Admin.deserializeUser());
    // Authorization ROUTES============Admin=============

    // Show sign up form
    router.get("/Adminregister",function(req,res){
      res.render("Adminregister.ejs");
    })

    // handling user sign up
    router.post("/Adminregister",function(req,res){
      console.log(req.body.username);
        Admin.register(new Admin({username: req.body.username}),req.body.password,function(err,admin){
          if (err) { // password is hashed by resiter and then saved in DB
            res.send(err);
            res.redirect("/Adminregister");
          } else {
            passport.authenticate("local")(req,res,function(){ // local can be replaced by twitter or fb
              res.redirect("/secret");      //but here we are authenticating locally
            })
          }
        })
    })

    // LOGIN ROUTES
    // Render login form
    router.get("/Adminlogin",function(req,res){
      res.render("Adminlogin.ejs")
    })

    //login logic
    //MIDDLEWARE
    router.post("/Adminlogin",passport.authenticate("local",{
      successRedirect:"/secret",
      failureRedirect:"/Adminlogin"
    }),function(req,res){});


module.exports = router;
