

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
