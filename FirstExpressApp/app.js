var express =require('express');
var app		=express();

//routing on /
app.get("/",function (req,res) {
	res.send("Helloo...Kem cho, Khaana Khaake Jaana Hnn. Jai shree Krishna.");
})

//routing on /bye
app.get("/bye",function(req,res){
	res.send("Goodbye!!")
});

//routing on /dogs
app.get("/dogs",function(req,res){
	res.send("dogs working on it>>")
	console.log("Someone made a request to dogs");
});

//listen
app.listen(2000,function () {
	console.log("server started");
})