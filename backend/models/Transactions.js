const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  reference: {
    type: String,
    required: true,
    unique: true,
  },
  customerNumber: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  customerPhoneNumber: {
    type: String,
    required: true,
  },
  transferAmount: {
    type: String,
    required: true,
  },
  transferCurrency: {
    type: String,
    required: true,
  },
  beneficiaryBank: {
    type: String,
    required: true,
  },
  beneficiaryAccountNumber: {
    type: String,
    required: true,
  },
  paymentDetails: {
    type: String,
    required: true,
  },
  cardDetails: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
