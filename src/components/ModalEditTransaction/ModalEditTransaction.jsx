import React, { useState } from "react";
import styles from "./ModalEditTransaction.module.css";

const EditTransactionModal = ({ transaction, onClose, onSave }) => {
  const [transactionType, setTransactionType] = useState(transaction.type || "Income");
  const [amount, setAmount] = useState(transaction.amount || "");
  const [date, setDate] = useState(transaction.date || new Date().toISOString().split("T")[0]);
  const [comment, setComment] = useState(transaction.comment || "");
  const [category, setCategory] = useState("");
  
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
    <div className={styles.modalOverlay}>
      <div className={styles.logo}></div>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Edit Transaction</h2>

        <div className={styles.transactionTypeToggle}>
          <button
            className={`${styles.transactionTypeButton} ${
              transactionType === "Income" ? styles.selectedIncome : ""
            }`}
            onClick={() => setTransactionType("Income")}
          >
            Income  
          </button>
          <span className={styles.span}>/</span>
          <button
            className={`${styles.transactionTypeButton} ${
              transactionType === "Expense" ? styles.selectedExpense : ""
            }`}
            onClick={() => setTransactionType("Expense")}
          >
            Expense
          </button>
        </div>
        <div className={styles.inputGroup}>
  {transactionType === "Expense" && (
    <select
      className={styles.inputField}
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Select Category</option>
      <option value="Main expenses">Main expenses</option>
      <option value="Products">Products</option>
      <option value="Car">Car</option>
      <option value="Self care">Self care</option>
      <option value="Child care">Child care</option>
      <option value="Household products">Household products</option>
      <option value="Education">Education</option>
      <option value="Leisure">Leisure</option>
    </select>
  )}
</div>
        <div className={styles.inputGroup}>
          <input
            type="number"
            className={styles.inputField}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="date"
            className={styles.inputField}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.inputField}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
          />
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton} onClick={handleSave}>
            SAVE
          </button>
          <button className={styles.secondaryButton} onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTransactionModal;
