const express = require("express");
const Transaction = require("../models/Transactions.js");
const router = express.Router();

router.post("/transactions", async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error creating transaction" });
  }
});

// View all transactions
router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions" });
  }
});

router.get("/transactions/customer/:customerNumber", async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      customerNumber: req.params.customerNumber,
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transaction" });
  }
});

router.put("/transactions/customer/:customerNumber", async (req, res) => {
  try {
    const { customerNumber } = req.params;
    const updatedTransaction = await Transaction.findOneAndUpdate(
      { customerNumber },
      req.body,
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json(updatedTransaction);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating transaction", error: error.message });
  }
});

module.exports = router;
