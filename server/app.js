const express = require("express")
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const redis = require("redis");
const userRouter = require("./routes/userRouter");
const authMiddleware = require('./middleware/auth')
const app = express();
//var rediscl = redis.createClient();
var url = "mongodb+srv://vysh:pass123*@cluster0.isw7n.mongodb.net/userdb_test?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/user', userRouter);
app.use('/auth/', authMiddleware)


app.listen("8080", () => {
    console.log('Server started listening!')
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err)
        throw err;
    else
        console.log("DB Connected!");
})



