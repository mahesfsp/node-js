const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const  ObjectId = Schema.ObjectId;

const BookSchema = new Schema({
 title:{
    type: String,
    required: true
 },
 author:{
    type: String,
    required: true
 },
});

module.exports = mongoose.model("Book",BookSchema,'book');