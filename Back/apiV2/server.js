const express = require('express');
const routes = require('./routes');
const Joi = require('joi');
const cors = require("cors");


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

// Import API routes
app.use('/api/advertisements', routes.advertisements);
app.use('/api.companies', routes.companies);
app.use('/api/users', routes.users);

// Start the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))