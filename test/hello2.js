var express=require("express");
var app=express();

app.use(express.static("public")); //To use any file other than from views folder

app.get("/",function(req,res){
	res.render("home.ejs");
})

app.get("/fallinlovewith/:thing",function(req,res){
	var thing=req.params.thing;
	res.render("love.ejs",{thingvar:thing});
})

app.get("/posts",function(req,res){
	var posts = [
		{title:"Redbook",author:"Radheshyam"},
	{title:"Pinkbook",author:"Madhav"},
	{title:"Yellowbook",author:"Raju"}
]


	res.render("posts.ejs",{posts:posts});
})

app.listen(3823,function(){
	console.log("server started");
})
