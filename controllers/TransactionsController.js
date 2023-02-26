const express = require('express');
const transactions = express.Router()
const transactionsArray = require('../models/transactions')
const { validateURL } = require('../validations/validations')

  // INDEX
    transactions.get("/", (req, res) => {
   res.status(200).json(transactionsArray)
});

  // SHOW
    transactions.get("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
      res.json(transactionsArray[index]);
    } else res.status(404).send("No such item exists");
  });  

  // CREATE
    transactions.post("/", validateURL, (req, res) => {
    transactionsArray.push(req.body);
    res.status(200).json(transactionsArray);
  });
  
  // UPDATE
        transactions.put("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
      transactionsArray[index] = req.body;
      res.status(200).json(transactionsArray[index]);
    } else {
      res.status(404).send("Cannot update item");
    }
  });

  // DELETE
    transactions.delete("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
      const deleted = transactionsArray.splice(index, 1);
      res.status(200).json(deleted);
    } else
      res.status(404).json({ error: "Not Found"});
  });  
module.exports = transactions;