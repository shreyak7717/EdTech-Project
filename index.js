const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("hello world")
})

app.post('/user/signup',()=>{
    res.json({
        message:"Signup endpoint"
    })
})

app.post('/user/signin',()=>{
    res.json({
        message:"Signin endpoint"
    })
})

app.get('/courses',()=>{
    res.json({
        message:"courses endpoint"
    })
})

app.get('/user/purchases',()=>{
    res.json({
        message:"purchased courses endpoint"
    })
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})