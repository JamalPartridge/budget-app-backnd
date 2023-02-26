// DEPENDENCIES
const express = require("express");
const transctionsController = require('./controllers/TransactionsController')
const cors = require('cors')

// CONFIGURATION
const app = express();

// MIDDLEWARE  
app.use(express.json());
app.use(cors())
app.use("/transtions", transctionsController);

// Routes
app.get("/", (req, res) => {
  res.send("welcome to my Budget app");
});

app.get("*", (req, res) => {
  res.json({ error: "Not FOUND"})
})


module.exports = app  