// impmort  the custom logger utility for error log
const logger =require('../utils/logger');

const errorHandler= (err, req, res, next) =>{
    // we will log here  the error message using the logger utility
    logger.error(err.message);

    // now we will sent ehre a generic error response with status code 500 i.e Internal Server Error...
    res.status(500).json({
        success: false, 
        error: err.message || 'Server Error', 
    });
};

module.exports = errorHandler;
