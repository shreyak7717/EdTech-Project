const { Router } = require('express');
const userRouter = Router();

userRouter.post('/signup',(req,res)=>{
    res.json({
        message:"Signup endpoint"
    });
});

userRouter.post('/signin',(req,res)=>{
    res.json({
        message:"Signin endpoint"
    });
});

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