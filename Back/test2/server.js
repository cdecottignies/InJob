const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fs = require('fs');

const PORT = process.env.PORT || 8090;
const app = express();

app.use(bodyParser.json()) 
// Write logs to a file
app.use(logger('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}))
// Write logs to the console
app.use(logger('dev'))

// Routes
app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))