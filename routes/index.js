const express = require("express")
const router = express.Router();
const bookRouter = require('./book');
const authRouter = require('./auth');
const EventEmitter = require("events");
const myEvent = new EventEmitter();
const path  = require("path")
router.get("/", (req, res) => {
    myEvent.emit("test-event", { name: "mahiba" });
   // res.sendFile(path.join(__dirname,"/../page/home.html"),{name:"maheswari"})
   res.render("index",{name:"maheswari"})
   // res.send("hello World!");

  });
  router.post("/", (req, res) => {
    res.json({ name: "mahes" });
  });
  router.use(authRouter);
  router.use(bookRouter)
  router.all("/*", (req, res) => {
    res.sendFile(path.join(__dirname,"/../page/404.html"))
  });

module.exports = router;