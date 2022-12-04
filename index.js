const express=require("express");
const ejs=require("ejs");

const app=express();

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render("index");
})

app.get("/about",function(req,res){
  res.render("about");
})

app.get('/Events1',function(req,res){
  res.render("Events1");
})

app.use(express.static("public"));

app.listen(3000,function(req,res) {
  console.log("I am at 3000");
})
