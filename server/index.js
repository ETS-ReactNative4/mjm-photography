const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors())

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

//************************** set mongodburi in .env file to DB link ****************************/

mongoose.connect(process.env.mongodburi).then(
  () => { 
    console.log("mongoose connected successfully");
  },
  err => {
    console.log("mongoose did not connect",err);
  }
);

//************************** CHANGE ROUTES BELOW ****************************/
const FooRoutes = require ("./routes/FooRoutes")
app.use(FooRoutes)

//****************** only use this if hosting both app and server on heroku ******/

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// });


const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port " + port);
});

// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});