const express = require('express')
const app = express()
const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");

// createCourseRoute(app);

app.use("/user", userRouter)
app.use("/course",courseRouter)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})