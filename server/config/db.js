// i have imported first  the mongoose library
const mongoose =require('mongoose');

// then imported the logger utility for logging messages
const logger  = require('../utils/logger');

// it si the Function to establish a connection with the MongoDB database
const connectDB =async () => {
    try {
        // trying to connect with mongoddb uisng string  environemental variable 
        await  mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        });

        // Logging successful or not 
        logger.info('Database connected successfully');
        console.log('Database connected successfully');
    }catch(error){
        //here Logging we are doing if connnection fails
        logger.error('Database connection failed', error);
        console.error(' Database connection failed:', error);

        // exit the process with failure status code
        process.exit(1);
    }
};

// last exporting 
module.exports = connectDB;
