const express = require('express');
const Router = express.Router;

// const { Router } = require('express');

const courseRouter = Router();

courseRouter.get('/', function(req,res){
    res.send("hello world")
})
    
courseRouter.get('/ab*c',(req,res)=>{
    res.send("Random route for testing")
})


courseRouter.get('/preview',()=>{
    res.json({
        message:"courses endpoint"
    })
})
    

module.exports={
    courseRouter : courseRouter
}