const {z} = require('zod');

const userSignupSchema = z.object({
    firstName : z.string().min(2, "First Name must be atleast 2 characters"),
    lastName : z.string().min(2, "First Name must be atleast 2 characters"),
    email : z.string().email("Invalid email format"),
    password : z.string().min(6, "Password must be atleast 6 characters")
});

const userLoginSchema = z.object({
    email : z.string().email("Invalid email"),
    password : z.string().min(6, "Password must be atleast 6 characters")
});

module.exports = {userSignupSchema, userLoginSchema };