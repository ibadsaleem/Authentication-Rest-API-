const express=require('express');
const { SignIn, SignUp } = require('../controller/authController');
const router=express.Router();

router.post('/signin',SignIn);
router.post('/signup',SignUp);

module.exports=router;