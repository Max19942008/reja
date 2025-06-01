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
app.get("/hello", function(req , res) {
console.log(`<h1 style="backgroun:red >HELLO WORLD</h1>`);
});

app.get("/gift", function(req , res) {
console.log(`<h1 style="backgroun:red >siz sovgalar bolimidasiz</h1>`);
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port:${PORT}`);
});
