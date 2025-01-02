// we will import here all required modules
const express = require('express'); // Express framework to buid web 
const dotenv =require('dotenv'); // For managing environment variables
const connectDB = require('./config/db'); // to connect db
const authRoutes =require('./routes/auth'); // Authentication routes
const taskRoutes = require('./routes/tasks'); // Task management routes
const errorHandler= require('./middlewares/errorHandler'); // Global error handler middleware
const rateLimiter = require('./middlewares/rateLimiter'); // Rate limiter middleware
const logger= require('./utils/logger'); 

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app=express();

// Middleware use ehre to parse incoming JSON requests
app.use(express.json());

// Apply rate limiter middleware to prevent abuse
app.use(rateLimiter);

/* 
    route - /api/auth
    desciption - Authentication routes
*/
app.use('/api/auth', authRoutes);

    // route - /api/tasks
   
app.use('/api/tasks', taskRoutes);

// Middleware to handle errors globally
app.use(errorHandler);

// Connect to the databases
connectDB();

// Define the port number from environment variable or default to 5000
const PORT= process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${ PORT}`); // Log server start info
    console.log(`Server running on http://localhost:${PORT}`); // Display server start info
});
