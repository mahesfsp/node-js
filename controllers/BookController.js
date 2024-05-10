//const connect = require("./../database/db");
const { ObjectId } = require("mongodb");
const Book = require("../models/Book");

exports.index=async(req,res)=>{
   // const db = await connect();
   // const books = await db.collection("book").find().toArray();
   const books = await Book.find();
    res.json(books);
};


exports.store= async(req,res)=>{

   // const db = await connect();
    // const data = {
    //     'title' : 'power of consistency',
    //     'author' : "mahiba"
    // };
    //await db.collection("book").insertOne(req.body);
    try{
        await Book.create(req.body);
        res.status(201).json({data:"Book is created"})
    }catch(error){
        res.json(error.errors)
    }
   
    };


exports.update=async(req,res)=>{
   // const db = await connect();
    const _id = new ObjectId(req.params.id);
    //await db.collection("book").updateOne({_id},{$set:req.body});
    await Book.updateOne({_id},{$set:req.body});
    
    res.json({data:"Book is updated"});
};

exports.delete=async(req,res)=>{
   // const db = await connect();
    const _id = new ObjectId(req.params.id);
   // await db.collection("book").deleteOne({_id});
   await Book.deleteOne({_id});

    res.json({data:"book is deleted"});

    //res.send(`This book id id ${req.params.id} to delete`)
};

exports.getSingleBook=
    async(req,res)=>{
        // const db = await connect();
         const _id = new ObjectId(req.params.id);
        // const book = await db.collection("book").find({ _id }).toArray();


        const book = await Book.find({ _id});
        res.json(book);
    };