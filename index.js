const express = require('express');
const bd = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const authModel = require('./model/authSchema');
const mainRoute= require('./routes/mainRoute');
const App = express();
const Port = 5000;


App.use(cors());
App.use(bd.urlencoded({
    urlencoded: false,
    extended: true
}))

App.use(bd.json());
App.use(mainRoute);
mongoose.connect('mongodb+srv://NodeMango:pakistan4@cluster0.ombzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("Database Connected!")
})

mongoose.connection.on("error", () => {
    console.log("Database Not Connected!")
})

App.get('/', (req, res) => {
    res.send("Hello World")
})



App.listen(Port, () => {
    console.log("Server is running...");
})





