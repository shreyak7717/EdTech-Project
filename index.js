const express = require('express')
const app = express()
const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const {adminModel} = require("./models/allModel")
const mongoose = require('mongoose');

// createCourseRoute(app);

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/course",courseRouter)

// dbConnect();
const PORT = 3000
async function main() {
    try {
        await mongoose.connect('mongodb+srv://shreyakhandelwal23cse:shreya@clusterstudent.e0ks9.mongodb.net/');
        console.log("Connected to database");
        app.listen(3000);
        console.log(`App is listening on port ${PORT}`)
    } catch (error) {
        console.log("Error connecting to database", error);
    }
};

main()

// const PORT = 3000
// app.listen(PORT, ()=>{
//     console.log(`App is listening on port ${PORT}`)
// })
