const express = require('express');
const expressRouter=express.Router();


expressRouter.use('/auth',require('./authRouter'));

module.exports=expressRouter;
