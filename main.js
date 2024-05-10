const express = require("express");
const app = express();
const port = 3001;
const routes = require('./routes/index');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.set('view engine', 'pug')
const connectDB = require("./database/db");

app.use(routes);
const EventEmitter = require("events");
const myEvent = new EventEmitter();
myEvent.on("test-event", (data) => {
  console.log(data);
  console.log("this event is listening");
});
connectDB().then(()=>{
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
});

