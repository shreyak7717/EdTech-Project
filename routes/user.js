const { Router } = require('express');
const { userModel} = require("../models/allModel")
const userRouter = Router();
const bcrypt = require('bcrypt');
const {userSignupSchema, userLoginSchema} = require("../utils/validation")
const {generateToken ,verifyToken} = require("../utils/jwt");

const saltRounds = 10;

userRouter.post('/signup',async (req,res)=>{
    try{
        const validateData = userSignupSchema.parse(req.body);
        const existingUser = await userModel.findOne({ email : validateData.email });
        if(existingUser){
            return res.status(400).json({message:"Email already in use"});
        }

        const hashedPassword = await bcrypt.hash(validateData.password, saltRounds);
        const newUser = new userModel({...validateData, password: hashedPassword}); 
        // In abv we can also use userModel.create in order to create a new user
        await newUser.save();

        res.status(201).json({message: "User registered successfully"});
    }
    catch(error){
        console.error("Signup Error:", error);
        res.status(500).json({message:"Error registering user", error});
    }
});

userRouter.post('/login',async (req,res)=>{
        try{
            const validateData = userLoginSchema.parse(req.body);

            const exisitingUser = await userModel.findOne({email: validateData.email});
            if(!exisitingUser){
                res.status(400).json({message:"User not found!"});
            }

            const isMatch = await bcrypt.compare(validateData.password, exisitingUser.password);
            if(!isMatch){
                res.status(401).json({message:"Invalid credentials"});
            }

            const token = generateToken(exisitingUser);

            res.cookie("token", token, {
                httpOnly: true,      // Prevents JS from accessing it (secure from XSS)
                secure: true,        // Use true in production with HTTPS
                sameSite: "strict",  // Prevents CSRF
                maxAge: 3600000      // Optional: expires in 1 hour
            });

            res.status(200).json({message:"Login Successful"});
        }catch(error){
            console.error("Signup Error:", error);
            res.status(500).json({message:"Error logging in",error: error.message || error });
        }
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

