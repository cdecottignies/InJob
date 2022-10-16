const express = require('express');
const routes = require('./routes');
const Joi = require('joi');
const cors = require("cors");
require('dotenv').config()
const cookieParser = require('cookie-parser');
// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./utils/swagger');


const PORT = process.env.PORT || 8090;

// Add midleware
const app = express();

// Parse Json
app.use(express.json());

// Allow the front to communicate with the Back
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// Cookies
app.use(cookieParser());

// Import API routes
app.use('/api/advertisements', routes.advertisements);
app.use('/api/companies', routes.companies);
app.use('/api/users', routes.users);
app.use('/api/auth', routes.auth);
app.use('/api/applicants', routes.applicants);

// Swagger
swaggerDocs(app, PORT)

// Start the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

module.exports = app