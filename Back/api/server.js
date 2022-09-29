const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8091"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Raccord Sequelize
const db = require("./models");
// TODO: En prod ne pas drop la database à chaque connexion
db.sequelize.sync({ force: true }).then(() => {
    console.log("Successfully connected to the database.");
})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Our routes
require("./routes/tutorials.route")(app);
require("./routes/advertisements.route")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
