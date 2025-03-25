const jwt = require("jsonwebtoken");
const jwt_secret = process.env.jwt_secret || "yoursecretkey";

const generateToken = (user) => {
    return jwt.sign(
        {id:user._id, email: user.email},
        jwt_secret,
        {expiresIn : "1h"}
    );
};

const verifyToken = (req, res, next ) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        res.status(400).json({message:"Unauthorized : Token not found"})
    }

    try{
        const decoded = jwt.verify(token, jwt_secret)
        req.user = decoded;
        next();
    }catch(error){
        res.status(500).json({message:"Invalid or expired token", error : error.message || error}); 
    }
}

module.exports = {generateToken ,verifyToken};