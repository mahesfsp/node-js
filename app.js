// const http = require("http");

// const server = http.createServer((req,res) =>{
//     res.write("hello node");
//     res.end();
// });

// server.listen(3000);



const http = require('node:http');
const PORT = 4000;
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
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



