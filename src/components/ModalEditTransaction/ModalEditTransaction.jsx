import React, { useState } from "react";
import "./ModalEditTransaction.module.css";

const EditTransactionModal = ({ transaction, onClose, onSave }) => {
  const [transactionType, setTransactionType] = useState(transaction.type || "Income");
  const [amount, setAmount] = useState(transaction.amount || "");
  const [date, setDate] = useState(transaction.date || new Date().toISOString().split("T")[0]);
  const [comment, setComment] = useState(transaction.comment || "");

  const handleSave = () => {
    onSave({
      ...transaction,
      type: transactionType,
      amount,
      date,
      comment,
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Edit Transaction</h2>

        {/* Selectare Income/Expense */}
        <div className="transaction-type-toggle">
          <button
            className={`transaction-type-button ${
              transactionType === "Income" ? "selected-income" : ""
            }`}
            onClick={() => setTransactionType("Income")}
          >
            Income
          </button>
          <button
            className={`transaction-type-button ${
              transactionType === "Expense" ? "selected-expense" : ""
            }`}
            onClick={() => setTransactionType("Expense")}
          >
            Expense
          </button>
        </div>

        <div className="input-group">
          <input
            type="number"
            className="input-field"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>

        <div className="input-group">
          <input
            type="date"
            className="input-field"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            className="input-field"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
          />
        </div>

        <div className="button-group">
          <button className="primary-button" onClick={handleSave}>
            SAVE
          </button>
          <button className="secondary-button" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTransactionModal;
