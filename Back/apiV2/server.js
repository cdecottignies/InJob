const express = require('express');
const routes = require('./routes');
const Joi = require('joi');

const PORT = process.env.PORT || 8090;

// Add midleware
const app = express();
app.use(express.json());

// Import API routes
app.use('/api/advertisements', routes.advertisements);
app.use('/api.companies', routes.companies);
app.use('/api/users', routes.users);

// Start the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))