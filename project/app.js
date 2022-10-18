const express = require("express");
//const { userInfo } = require("os");
const fs = require("fs");

const app = express();
var mongoose = require('mongoose');
const bodyparser=require("body-parser")
mongoose.connect('mongodb://localhost/dhruv',{useNewUrlParser:true});
const port = 423;
const path=require("path");

//Define mongoose schema//
const contactSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    Confirm : String
  });

const sign = mongoose.model('sign', contactSchema);
//express spacific stuff//
//app.use('/static', express.static('static') );
//app.use(express.urlencoded());

app.get("/signup", (req, res)=>{ 
    res.status(200).sendFile(__dirname+"eweb.html");
  });

app.post("/signup", (req, res)=>{
    var myData = new sign(req.body);
    myData.save().then(()=>{
       res.send('This item has been saved to the database')
  }).catch(()=>{
      res.status(400).send('item was not saved to the databse')
})});

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});

