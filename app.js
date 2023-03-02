// DEPENDENCIES
const express = require("express");
const transctionsController = require('./controllers/TransactionsController')
const cors = require('cors')
const morgan = require('morgan')

// CONFIGURATION
const app = express();

// MIDDLEWARE  
app.use(express.json());
app.use(cors())
app.use(morgan('tiny'))
app.use((req, res, next) => {
  console.log("this runs for every request");
  next();
})
app.use("/transactions", transctionsController);

// Routes
app.get("/", (req, res) => {
  res.send("welcome to my Budget app");
});

app.get("*", (req, res) => {
  res.json({ error: "Not FOUND"})
})


module.exports = app  