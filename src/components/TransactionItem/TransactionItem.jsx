// import React from 'react';
// import styles from './TransactionItem.module.css';

// const TransactionsItem = ({ transaction, onDelete, onEdit }) => {
//   const { id, date, type, category, comment, sum } = transaction;

//   return (
//     <tr className={styles.row}>
//       <td>{date}</td>
//       <td>{type}</td>
//       <td>{category}</td>
//       <td>{comment}</td>
//       <td>{sum}</td>
//       <td>
//         <button className={styles.editButton} onClick={() => onEdit(id)}>
//           ✏️
//         </button>
//         <button className={styles.deleteButton} onClick={() => onDelete(id)}>
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default TransactionsItem;
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import useMedia from '../../hooks/useMedia';
import { deleteTransactions } from '../../redux/Transactions/operations';
import { openEditModal, addEditId } from '../../redux/Modals/slice';
import { getStyleByType } from '../../helpers/transactionsFormatter';
import s from './TransactionItem.module.css';
import { Icon } from '../../icons';
import { getBalanceThunk } from '../../redux/Auth/operations';
import { type } from '@testing-library/user-event/dist/type';

function TransactionItem({ transaction, id }) {
  const dispatch = useDispatch();
  const { isMobile } = useMedia();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const idForModal = id;
  const style = getStyleByType(type);

  function onEdit() {
    if (!isModalOpen) {
      const newId = idForModal;
      dispatch(addEditId(newId));
      dispatch(openEditModal());
      setIsModalOpen(true);
    }
  }

  async function OnDelete() {
    await dispatch(deleteTransactions(id));
    dispatch(getBalanceThunk());
  }

  return isMobile ? (
    <ul className={s.card} style={style.type}>
      {[...Object.keys(transaction)].map((tKey, id) => {
        return (
          <li key={id} className={s.row}>
            <span className={s.row_item}>{tKey}</span>
            <span className={s.row_item}>{transaction[tKey]}</span>
          </li>
        );
      })}

      <li className={s.row}>
        <button
          type="button"
          className={clsx(s.btn_edit, s.row_item)}
          onClick={onEdit}
        >
          <Icon id="#icon-pen" className={s.edit}></Icon>
        </button>
        <button
          type="button"
          className={clsx(s.colored, 'btn_delete')}
          onClick={OnDelete}
        >
          Delete
        </button>
      </li>
    </ul>
  ) : (
    <>
      <ul className={s.row} style={style.type}>
        {[...Object.values(transaction)].map((value, id) => {
          return (
            <li key={id} className={s.row_item}>
              {value}
            </li>
          );
        })}
        <li className={clsx(s.row_item, s.controls)}>
          <button type="button" className={s.btn_edit} onClick={onEdit}>
            <Icon id="#icon-pen" className={s.edit}></Icon>
          </button>
          <button
            type="button"
            className={clsx(s.colored, 'btn_delete')}
            onClick={OnDelete}
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
}

export default TransactionItem;
