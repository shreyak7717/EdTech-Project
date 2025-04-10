const bcrypt = require("bcrypt");
const { adminModel } = require("../models/allModel") ;
const {adminSignupSchema, adminLoginSchema } = require("../utils/validation")
const { generateAdminToken } = require("../utils/jwt") ;

const saltRounds = 10;

const AdminsignupController = async(req,res)=>{
    try{
        const validateData = adminSignupSchema.parse(req.body);
        const existingUser = await adminModel.findOne({ email : validateData.email });
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
}

const AdminloginController = async(req,res)=>{
    try{
        const validateData = adminLoginSchema.parse(req.body);

        const exisitingUser = await adminModel.findOne({email: validateData.email});
        if(!exisitingUser){
            res.status(400).json({message:"User not found!"});
        }

        const isMatch = await bcrypt.compare(validateData.password, exisitingUser.password);
        if(!isMatch){
            res.status(401).json({message:"Invalid credentials"});
        }

        const token = generateAdminToken(exisitingUser);

        res.cookie("Admintoken", token, {
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
}

module.exports = {AdminsignupController,AdminloginController}