const express = require("express");
const app = express();
const port = 409;
const path=require("path");

//express spacific stuff//
app.use('/static', express.static('static') );
app.use(express.urlencoded());

//pug realted stuff//
app.engine('pug' , require('pug').__express);

app.set('view engine', 'pug');
app.set('views' , path.join(__dirname,'views'));

//end points//

app.get("/", (req, res) => {
     const params={'title' : 'my pug website'};
     res.render('contact.pug' , params);
  });


  
app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});