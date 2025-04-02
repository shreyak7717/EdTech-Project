require("dotenv").config();
const express = require('express')
const app = express()
const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const {adminModel} = require("./models/allModel")
const mongoose = require('mongoose');


//middleware route
app.use(express.json());

// createCourseRoute(app);

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/course",courseRouter)


// dbConnect();
const PORT = 3000
async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
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
