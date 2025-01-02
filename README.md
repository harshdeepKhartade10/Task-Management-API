# Task-Management-API

Task Management API

This is a Node.js-based Task Management API that provides authentication, task creation, updating, retrieval, and deletion functionalities.

Prerequisites

Node.js
MongoDB 

Environment Variables:
MONGO_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT token.
PORT: Port number (default: 5000).
LOG_FILE= logs/app.log

Installation
Clone the repository.
Navigate to the project folder.
Install dependencies:

npm install
Create a .env file in the root directory and add the required environment variables.

Run the Application

To start the server in development mode:

npm run dev

To start the server in production mode:

npm start

The server will run at: http://localhost:5000

API Endpoints

Authentication

POST /api/auth/register: Register a new user.  send name email and password

POST /api/auth/login: Log in a user. send email and password 

Tasks

POST /api/tasks: Create a new task.  once signin jwt token crated you can access this route when you enter jwt token in authorization section of header

GET /api/tasks: Retrieve all tasks. jwt token is mandatory

GET /api/tasks/:id: Retrieve a task by ID.  jwt token is mandatory

PUT /api/tasks/:id: Update a task by ID.  jwt token is mandatory

DELETE /api/tasks/:id: Delete a task by ID.  jwt token is mandatory

Testing with Postman

Import the API endpoints into Postman.

Use the following authentication format in headers:

Authorization: JWT token enter here once we successfully registered 

Error Handling

Proper error messages are returned for invalid requests.

Rate limiting is implemented to prevent abuse.

Logging

Application logs are managed using a logging library.
