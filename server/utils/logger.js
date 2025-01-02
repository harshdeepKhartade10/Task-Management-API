const winston= require('winston');
const path = require('path');

// we will define here  the log file path 
const logFilePath =path.join(__dirname, '../logs/app.log');

// Winston Logger Configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level,message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({filename:logFilePath }), 
    new winston.transports.Console(), // Display logs in console
  ],
});

module.exports = logger;
