    const express = require('express');
    const bd = require('body-parser');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const authModel = require('./authSchema');
    const App = express();
    const Port = 5000;


    App.use(cors());
    App.use(bd.urlencoded({
        urlencoded: false,
        extended: true
    }))

    App.use(bd.json());

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


    App.post('/signup', (req, res) => {
        let auth_Model = new authModel({ email: req.body.email, password: req.body.password });
        auth_Model.save()
            .then((response) => {
                console.log(response, "Data Stored Successfully!");

            })
            .catch((err) => {
                console.log(err, "Data Not Stored Successfully!");
            })

    })

    App.listen(Port, () => {
        console.log("Server is running...");
    })





