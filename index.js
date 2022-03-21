const bodyparser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
app.set('view engin','ejs');
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true })); //this line is already mentioned above

mongoose.connect(
  "mongodb+srv://NoumanAzeem:12345@db.e6le9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.connection.on("error", (err) => {
  console.log("not connected");
});
mongoose.connection.on("connected", (connected) => {
  console.log("yes connected");
});
////

//////////////create schema
//////defining datatype
const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name1: String,
});
/////////////create  Actor model(collection)& here Actor is collection and actorschema is a schema
var data = mongoose.model("ytb", userSchema);

app.post("/i", (req, res, next) => {
  console.log("donee");
  // console.log(req.body);
  const {name1}=req.body
  console.log(req.body);


  // res.send("Done");
  // const name1 = req.body.name1;
  // console.log(name1);

  // const user = new data({
  //   _id: new mongoose.Types.ObjectId(),
  //   name1: name1,
  // });
  // console.log(user);
  // user
  //   .save()
  //   .then((result) => {
  //     console.log(result);
  //     res.status(200).json({
  //       newuser: result,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err,
  //     });
  //   });
  // res.send("Done");
});

app.listen(5000, function () {
  console.log("listening on 5000");
});
