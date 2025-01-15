const express = require("express");
const app = express();

const port = 8000;

//middlewears
app.use(express.json())

// imports`
const { connectToMongoDB } = require("./connect");
const urlRouter = require('./routes/url')

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortner").then(() =>
  console.log("mongoDB connected")
);

app.use('/url', urlRouter)

app.listen(port, () => {
  console.log("server started at port: ", port);
});
