const express = require("express");
const app = express();

const port = 8001;

// imports
const { connectToMongoDB } = require("./connect");

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortner").then(() =>
  console.log("mongoDB connected")
);

app.listen(port, () => {
  console.log("server started at port: ", port);
});
