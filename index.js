const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const mongoose = require("mongoose");
var cors = require("cors");

app.set("view engin", "ejs");
app.use(
  express.urlencoded({
    extended: true,
  })
);
const fileUpload = require("express-fileupload");
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
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dqdpio4xn",
  api_key: "467147114767511",
  api_secret: "o_sJvKKf2sDscXqQYVg1Ar0pwZA",
});
////

//////////////create schema
//////defining datatype
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  type: String,

  img: String,
});
/////////////create  Actor model(collection)& here Actor is collection and actorschema is a schema
var data = mongoose.model("youtube", userSchema);
var history = mongoose.model("history", userSchema);
var liked = mongoose.model("liked", userSchema);
const userLog = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  pasword: String,
});
var userdata = mongoose.model("userlog",userLog );

// app.post("/i", (req, res, next) => {
//   console.log("donee");
//   // console.log(req.body);
//   const {name1}=req.body
//   console.log(req.body);

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
// });
app.post("/j", (req, res) => {
  const file = req.files.img;
  console.log(req.body.type);

  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    console.log(result);
    const movie = new data({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      type: req.body.type,

      img: result.url,
    });
    movie
      .save()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          newMovie: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  });
});
app.post("/history", (req, res) => {
  console.log(req.body, "dataaa");

  const movie = new history({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title1,

    img: req.body.img1,
  });
  console.log(movie.title, "title");
  movie
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newMovie: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
app.post("/liked", (req, res) => {
  console.log(req.body, "like");

  const like = new liked({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title1,

    img: req.body.img1,
  });
  console.log(like, "like");
  like
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
app.get("/get", (req, res, next) => {
  console.log("get");
  data
    .find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
app.get("/history", (req, res, next) => {
  console.log("nomix");

  history
    .find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
app.get("/liked", (req, res, next) => {
  console.log("nomix");

  liked
    .find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
app.get("/:id", (req, res, next) => {
  console.log("data by id");
  data
    .findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        actorData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
app.get("/type/:type", (req, res, next) => {
  
  data.find({type:req.params.type})
    .then((result) => {
      res.status(200).json({
         result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
app.post("/Signup", async(req, res) => {
  
  const isExist = await userdata.findOne({ email: req.body.email });
  if (isExist) {
    res.json({ message: "Email is already exist" });
  } else {

  
  const usereDatas = new userdata({
    _id: new mongoose.Types.ObjectId(),
    name:req.body.name,
    email:req.body.email,
    pasword:req.body.pasword
  });
  usereDatas
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });}
})
app.post("/login", async(req, res) => {
  
  userdata.findOne({ email: req.body.email },(err,user)=>{
    if(user){
     
      if(req.body.pasword===user.pasword){
        res.send({message:"login successfullly",user:user})
      }
      else{
        res.send({message:"pasword not matched"})
      }

    }
    else{
      res.send({message:"user not registered"})
    }
  })
 
})


app.listen(5000, function () {
  console.log("listening on 5000");
});
