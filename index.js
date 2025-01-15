const express = require("express");
const path = require('path')
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


app.set('view engine', 'ejs')
app.set('views',path.resolve('./views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
  console.log("server started at port: ", port);
});
