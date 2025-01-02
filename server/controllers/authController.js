const User = require('../models/User');

// import this libary bcryptjs for hashing and comparing password
const bcrypt = require('bcryptjs');

// i have import this  jwt for creating JSON Web Tokens
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    try {
        //first we  Destructuring name, email, and password from the request body  and then
        const { name, email, password } = req.body;

        // we check if all required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        // check also if a user with the provided email already exists or not
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // now we generate  a salt for password hashing
        const salt = await bcrypt.genSalt(10);

        // now we hash the password with the  whatever above generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating a new user in the database
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // genrate now  a JWT token for authentication and having token expiry 1hour
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        // now we wiill here send a success response with the token when user sign up successfully...
        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const loginUser = async (req, res) => {
    try {
        //first we  Destructuring name, email, and password from the request body  and then
        const { email, password } = req.body;

        // we check if all required fields are provided
        if (!email || !password) {
            return res.status(400).json({ error: 'Please provide email and password' });
        }

        // Finding the user by email in the database present or not
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // now we will compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // if once passsowrd match then thier will be generating  a JWT token for authentication
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        // then we send a success response with the token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { registerUser, loginUser };
