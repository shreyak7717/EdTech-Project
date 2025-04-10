const { Router } = require("express");
const {AdminsignupController,AdminloginController} = require("../controllers/admin.controller")
const adminRouter = Router();

adminRouter.post("/signup",AdminsignupController)

adminRouter.post("/login",AdminloginController)

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