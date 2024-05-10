// const http = require("http");

// const server = http.createServer((req,res) =>{
//     res.write("hello node");
//     res.end();
// });

// server.listen(3000);



const http = require('node:http');

const fs = require('fs');
const { resolve } = require('node:path');
const { rejects } = require('node:assert');

//learning about call stack

const func1 = () => {console.log("func1")}
const func2 = () => {console.log("func2")}
const func3 = () => {
  console.log("func3");
  setTimeout(func1,0);
  new Promise((resolve,reject)=>{
    resolve("I am Promise");
  }).then((res)=>{
    console.log(res)
  });
  func2();
};
func3();




//learning about call stack

const PORT = 3000;
// Create a local server to receive data from
const server = http.createServer((req, res) => {
if(req.url == "/"){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile("page/home.html","utf8",(err,data) =>{
    if (err) throw err;
    res.write(data);
    res.end()
  })
}else if(req.url == "/about"){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile("page/about.html","utf8",(err,data) =>{
    if (err) throw err;
    res.write(data);
    res.end()
  })
}else if(req.url == "/login"){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile("page/login.html","utf8",(err,data) =>{
    if (err) throw err;
    res.write(data);
    res.end()
  })
}else if(req.url == "/create-file"){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.writeFile("temp/test.html","<h1>This is test file updated",(err) =>{
    if (err) throw err;
    res.write("The file is created");
    res.end()
  })
  fs.appendFile("temp/test.html","<h1>This is test file appened",(err) =>{
    if (err) throw err;
    res.write("The file is created");
    res.end()
  })
}else{
  res.writeHead(404, { 'Content-Type': 'text/html' });
  fs.readFile("page/404.html","utf8",(err,data) =>{
    if (err) throw err;
    res.write(data);
    res.end()
  })
}


});
console.log(`server running at http://localhost:${PORT}`)
server.listen(PORT);




// const {area,circumference} = require("./circle");
// console.log(area(5));
// console.log(circumference(5));


// const Circle = require("./circle");

// const circle = new Circle();

// console.log(circle.area(2));
// console.log(circle.circumference(2));



