// we will import here JWT (JSON Web Token) for token verification
const jwt =require('jsonwebtoken');

const protect = (req, res, next) => {
    // now Extracting the token from the 'Authorization' header
    const token = req.header('Authorization');

    // Checking if the token is missing
    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied'});
    }

    try {
        // now we wiill verify  the token using the secret key from environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // and attach the decoded user information request object
        req.user= decoded;
        next();
    } catch (err){
        res.status(401).json({error: 'Token is not valid' });
    }
};

//exporting function
module.exports = { protect };
