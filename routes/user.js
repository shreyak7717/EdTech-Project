const { Router } = require('express');
const { userModel} = require("../models/allModel")
const userRouter = Router();
const {signupController,loginController} = require("../controllers/user.controller")

userRouter.post('/signup',signupController);

userRouter.post('/login',loginController);

userRouter.get('/purchases',(req,res)=>{
    res.json({
        message:"purchased courses endpoint"
    });
});

userRouter.post('/purchase',(req,res)=>{
    res.json({
        message:"You would expect students to pay here, this is its endpoint"
    });
});

userRouter.get('/course',(req,res)=>{
    res.send("Random route for testing2")
});
    

module.exports={
    userRouter : userRouter
}

