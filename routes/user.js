const { Router } = require('express');
const userRouter = Router();
const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


userRouter.post('/signup',async (req,res)=>{
    try{
        const {firstName, lastName, email , password} = req.body;
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email already in use"});
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new userModel({firstName, lastName, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({message: "User registered successfully"});
    }
    catch(error){
        res.status(500).json({message:"Error registering user", error});
    }
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