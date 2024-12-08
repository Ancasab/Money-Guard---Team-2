import React, { useState } from "react";
import styles from "./ModalAddTransaction.module.css"; 

const AddTransactionModal = ({ onClose }) => {
  const [transactionType, setTransactionType] = useState("Income"); 
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [comment, setComment] = useState("");

  const handleTransactionTypeToggle = () => {
    setTransactionType((prev) => (prev === "Income" ? "Expense" : "Income"));
  };

  const handleAdd = () => {
    console.log({
      transactionType,
      category,
      amount,
      date,
      comment,
    });
    onClose(); // Închide modalul
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Add Transaction</h2>
        
        {/* Income/Expense Toggle */}
        <div className={styles.toggleDiv}>
        <div>
          <span className={styles.toggleSwitchIncome} style={{
              color: transactionType === "Income" ?"rgba(255, 182, 39, 1)" : "rgba(255, 255, 255, 0.6)"
            }}>Income</span>
        </div>
        <div className={styles.toggleSwitch}>
          <div
            style={{
              backgroundColor: transactionType === "Income" ? "#0f9d58" : "#d93025",
            }}
            onClick={handleTransactionTypeToggle}
          >
            <div
              className={styles.toggleSwitchCircle}
              style={{
                backgroundColor:
                    transactionType === "Income" ? "rgba(255, 182, 39, 1)" : "rgba(255, 134, 141, 1)", 
                left: transactionType === "Income" ? "2px" : "62px",
            }}
            >
              {transactionType === "Income" ? "+" : "-"}
            </div>
          </div>
        </div>
        <div>
          <span className={styles.toggleSwitchExpense} style={{
              color: transactionType === "Expense" ?"rgba(255, 134, 141, 1)" : "rgba(255, 255, 255, 0.6)"}}>Expense</span>
        </div>
        </div>
        <div className={styles.inputGroup}>
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
        </div>

        <div className={styles.inputGroup}>
          <input
            type="number"
            className={styles.inputField}
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton} onClick={handleAdd}>
            ADD
          </button>
          <button className={styles.secondaryButton} onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionModal;
