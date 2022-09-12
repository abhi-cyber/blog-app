const mongoose = require("mongoose");

// Connection with mongoose and mongodbCompass
mongoose
  .connect("mongodb://127.0.0.1:27017/blog-app")
  .then(() => {
    console.log("db connected")
  })
  .catch((err) => console.log("db connection failed: ", err.message || err));
