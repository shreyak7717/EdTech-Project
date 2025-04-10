const jwt = require("jsonwebtoken");
const admin = require("../routes/admin");
const jwt_user_secret = process.env.jwt_user_secret || "yoursecretkey";
const jwt_admin_secret = process.env.jwt_admin_secret || "yoursecretkey";

const generateUserToken = (user) => {
    return jwt.sign(
        { id: user._id, role: "user", email: user.email }, jwt_user_secret, {expiresIn : "1h"}
    );
};

const generateAdminToken = (user) => {
    return jwt.sign(
        {id:admin._id, role: "user", email: admin.email },
        jwt_admin_secret,
        {expiresIn : "1h"}
    );
};



const verifyUserToken = (req, res, next ) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        res.status(400).json({message:"Unauthorized : Token not found"})
    }

    try{
        const decoded = jwt.verify(token, jwt_user_secret)
        req.user = decoded;
        next();
    }catch(error){
        res.status(500).json({message:"Invalid or expired token", error : error.message || error}); 
    }
}

const verifyAdminToken = (req, res, next ) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        res.status(400).json({message:"Unauthorized : Token not found"})
    }

    try{
        const decoded = jwt.verify(token, jwt_admin_secret)
        req.admin = decoded;
        next();
    }catch(error){
        res.status(500).json({message:"Invalid or expired token", error : error.message || error}); 
    }
}

module.exports = {generateUserToken ,verifyUserToken ,generateAdminToken, verifyAdminToken};