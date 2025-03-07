// const mongoose = require("mongoose");

// const dbConnect = async () => {
//     try {
//       await mongoose.connect('mongodb+srv://shreyakhandelwal23cse:<l7iUNxXgH5bYoLgg>@clusterstudent.e0ks9.mongodb.net/');
//       console.log("Connected to database");
//     } catch (error) {
//       console.log("Error connecting to database", error);
//     }
//   }

// // ------------------------------------------------------------------------------------------------------

// const { adminRouter } = require("../routes/admin");

// const Schema = mongoose.Schema();
// const ObjectId = mongoose.Types.ObjectId;

// const adminSchema = new Schema({
//     email : {type : String, unique: true},
//     password: String,
//     firstName : String,
//     lastName: String
// });

// const courseSchema = new Schema({
//     title: String,
//     description: String,
//     price: Number,
//     imageUrl: String,
//     creatorId : ObjectId
// });

// const purchasesSchema = new Schema({
//     userId: ObjectId,
//     courseId : ObjectId
// });

// const userSchema = new mongoose.Schema({
//     firstName : {
//         type: String,
//         require: true
//     },

//     lastName : {
//         type : String
//     },
    
//     email : {
//         type: String,
//         require:true
//     },

//     password : {
//         type: String,
//         require: true
//     }
// })

// const adminModel = mongoose.model("admin", adminSchema)
// const courseModel = mongoose.model("course", courseSchema)
// const purchasesModel = mongoose.model("purchases", purchasesSchema)
// const userModel = new mongoose.model("User", userSchema)

// module.exports = {
//     adminModel,
//     courseModel,
//     purchasesModel,
//     userModel,
//     dbConnect
// }

const mongoose = require("mongoose");



const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// Admin Schema
const adminSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String }
}, { timestamps: true });

// Course Schema
const courseSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    imageUrl: String,
    creatorId: { type: ObjectId, required: true }
}, { timestamps: true });

// Purchases Schema
const purchasesSchema = new Schema({
    userId: { type: ObjectId, required: true },
    courseId: { type: ObjectId, required: true }
}, { timestamps: true });

// User Schema
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

// Defining Models
const adminModel = mongoose.model("Admin", adminSchema);
const courseModel = mongoose.model("Course", courseSchema);
const purchasesModel = mongoose.model("Purchase", purchasesSchema);
const userModel = mongoose.model("User", userSchema);

// Exporting Models & DB Connection
module.exports = {
    adminModel,
    courseModel,
    purchasesModel,
    userModel,
};
