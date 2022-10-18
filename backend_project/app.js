const express = require("express");
const { userInfo } = require("os");
const fs = require("fs");

const app = express();
var mongoose = require('mongoose');
const bodyparser=require("body-parser")
mongoose.connect('mongodb://localhost/dhruv',{useNewUrlParser:true});
const port = 423;
const path=require("path");

//Define mongoose schema//
const contactSchema = new mongoose.Schema({
  uname: String,
  phone: String,
  city: String,
  age: String
});

const Contact = mongoose.model('contact', contactSchema);
//express spacific stuff//
app.use('/static', express.static('static') );
app.use(express.urlencoded());

//pug realted stuff//
app.engine('pug' , require('pug').__express);

app.set('view engine', 'pug');
app.set('views' , path.join(__dirname,'views'));

//end points//

app.get("/", (req, res) => {
  const params={};
  res.render('home.pug' , params);
 });

 app.get("/contact", (req, res)=>{ 
  const params={};
  res.status(200).render('contact.pug', params);
});


app.post("/contact", (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
       res.send('This item has been saved to the database')
  }).catch(()=>{
      res.status(400).send('item was not saved to the databse')
})});

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});
 