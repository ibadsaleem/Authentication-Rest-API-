const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const authModel = require('../model/authSchema');
const App = express();

const Port = 5000;

//-------SIGN UP REST API---------

const SignUp= async (req, res) => {

    let checkUser = await authModel.findOne({ email: req.body.email, password: req.body.password });
    if (checkUser) {
        res.status(200).send({ result: checkUser, message: 'User Already Registered' });
    } else {
        let hashPass = await bcrypt.hash(req.body.password, 12);
        let auth_Model = new authModel({ email: req.body.email, password: hashPass });
        auth_Model.save()
            .then((response) => {
                res.status(200).send({ result: response, message: 'Data Stored Successfully' })
            })
            .catch((err) => {
                res.status(400).send({ result: err.message, message: 'Data Not Stored Successfully' })
            })
    }

}

//--------Sign In REST API----------

const SignIn = async (req, res) => {
    let checkUser = await authModel.findOne({ email: req.body.email });
    if (checkUser) {
        var checkPass = await bcrypt.compare(req.body.password, checkUser.password);
        if (checkPass) {
            res.status(200).send({ message: 'User Sign In successful' });
        }
        else {
            res.status(403).send({ message: 'Password Incorrect' });

        }
    } else {
        res.status(403).send({ message: 'User Not Registered' });
    }
}

module.exports = {SignUp,SignIn};
