
const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Bobur2008:bk2Pcn02Nt8XK1s2@cluster0.wndqgsa.mongodb.net/Reja";

mongodb.connect(connectionString, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
}, (err,client) => {
  if (err) console.log("ERROR on connection MongoDB");
  else {
    console.log("MongoDB connection succeed")
    module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
let PORT = 4008;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port:${PORT},http://localhost:${PORT} `);
});
  }
})

