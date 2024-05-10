//const connect = require("./../database/db");
const { ObjectId } = require("mongodb");
const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, saltRounds);
    const data = { ...req.body, password };
    const user = await Auth.create(data);
    res.status(201).json({ data: user });
  } catch (error) {
    res.json(error.errors);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await Auth.findOne({ email: req.body.email });
    
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    if (!bcrypt.compare(req.body.password, user.password)) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    const token = jwt.sign({user},"fake-jwt-token");
    res.json({ user ,access_token:token});
  } catch (error) {
    res.json(error.errors);
  }
};
