const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/login",(req,res)=>{
    res.json({
        message:"SignIn route"
    });
})

adminRouter.post("/signup",(req,res)=>{
    res.json({
        message:"SignUp route"
    });
})

adminRouter.post("/course",(req,res)=>{
    res.json({
        message:"course creation endpoint"
    });
})

adminRouter.put("/course",(req,res)=>{
    res.json({
        message:"course changes endpoint"
    });
})

adminRouter.get("/course/all",(req,res)=>{
    res.json({
        message:"get all course endpoint"
    });
})

module.exports = {
    adminRouter : adminRouter
}