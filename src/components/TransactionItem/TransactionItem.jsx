import React from 'react';
import styles from './TransactionItem.module.css';

const TransactionsItem = ({ transaction, onDelete, onEdit }) => {
  const { id, date, type, category, comment, sum } = transaction;

  return (
    <tr className={styles.row}>
      <td>{date}</td>
      <td>{type}</td>
      <td>{category}</td>
      <td>{comment}</td>
      <td>{sum}</td>
      <td>
        <button className={styles.editButton} onClick={() => onEdit(id)}>
          ✏️
        </button>
        <button className={styles.deleteButton} onClick={() => onDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionsItem;
