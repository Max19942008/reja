console.log("web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");
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


app.get("/", function (req ,res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port:${PORT}`);
});
