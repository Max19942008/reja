console.log("web serverni boshlash");
const fs = require("fs");
const express = require("express");
const app = express();



let user;
fs.readFile("database/user.json","utf8", (err, data) =>{
if(err) {
  console.log("ERROR:", err);
} else {
  user = JSON.parse(data)
}
});

// Mongo db
const db = require("./server").db();
//1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//2 Session boglik kodlar

//3 BSSR tradional way views ga boglik kodlar
app.set("views","views");
app.set("view engine","ejs");


//4 routing 
app.post("/create-item", (req,res) =>{
console.log(req.body);
res.json({test: "success"});
});

app.get('/author',(req , res) => {
res.render("author", {user: user});
});

app.get("/", function (req ,res) {
  res.render("reja");
});

module.exports = app;  