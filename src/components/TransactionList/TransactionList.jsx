// import React from 'react';
// import styles from './TransactionList.module.css';
// import TransactionItem from '../TransactionItem/TransactionItem';

// const TransactionsList = ({ transactions = [], onDelete, onEdit }) => {
//   return (
//     <div className={styles.tableContainer}>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Type</th>
//             <th>Category</th>
//             <th>Comment</th>
//             <th>Sum</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map(transaction => (
//             <tr key={transaction.id}>
//               <td>{transaction.date}</td>
//               <td>{transaction.type}</td>
//               <td>{transaction.category}</td>
//               <td>{transaction.comment}</td>
//               <td>{transaction.sum}</td>
//               <td>
//                 <button onClick={() => onEdit(transaction.id)}>Edit</button>
//                 <button onClick={() => onDelete(transaction.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TransactionsList;
// import React, { useState, useEffect } from 'react';
// import TransactionsItem from '../TransactionItem/TransactionItem';
// import styles from '../TransactionList/TransactionList.module.css';
// import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';

// const TransactionsList = () => {
//   const initialTransactions = [
//     {
//       id: 1,
//       date: '2024-12-01',
//       type: 'Income',
//       category: 'Salary',
//       comment: 'Monthly salary',
//       sum: 3000,
//     },
//     {
//       id: 2,
//       date: '2024-12-02',
//       type: 'Expense',
//       category: 'Groceries',
//       comment: 'Weekly shopping',
//       sum: 150,
//     },
//   ];

//   // Încarcă tranzacțiile din localStorage sau folosește datele inițiale
//   const [transactions, setTransactions] = useState(() => {
//     const storedTransactions = localStorage.getItem('transactions');
//     return storedTransactions
//       ? JSON.parse(storedTransactions)
//       : initialTransactions;
//   });

//   // Salvează tranzacțiile în localStorage când se actualizează
//   useEffect(() => {
//     localStorage.setItem('transactions', JSON.stringify(transactions));
//   }, [transactions]);

//   // Funcții pentru editare și ștergere
//   const handleDelete = id => {
//     setTransactions(transactions.filter(transaction => transaction.id !== id));
//   };

//   const handleEdit = id => {
//     console.log(`Edit transaction with id: ${id}`);
//     // Logica pentru editare
//   };

//   return (
//     <table className={styles.table}>
//       <thead>
//         <tr>
//           <th>Date</th>
//           <th>Type</th>
//           <th>Category</th>
//           <th>Comment</th>
//           <th>Sum</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {transactions.map(transaction => (
//           <TransactionsItem
//             key={transaction.id}
//             transaction={transaction}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//           />
//         ))}
//         <AddTransactionForm />
//       </tbody>
//     </table>
//   );
// };

// export default TransactionsList;
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectTransError,
  selectTransLoading,
  selectTransactions,
} from '../../redux/Transactions/selectors';
import { selectCategories } from '../../redux/Statistics/selectors';
import {
  getFormattedTransactions,
  getHeadTransaction,
} from '../../helpers/transactionsFormatter';
import { addTransactions } from '../../redux/Transactions/operations';
import s from '../TransactionList/TransactionList.module.css';
import Loader from '../Loader/Loader';
import TransactionItem from '../TransactionItem/TransactionItem';
import FormButton from '../common/FormButton/FormButton';
import { openAddModal } from '../../redux/Modals/slice';
import useMedia from '../../hooks/useMedia';

const initialTransactions = [
  {
    id: 1,
    date: '2024-12-01',
    type: 'Income',
    category: 'Salary',
    comment: 'Monthly salary',
    sum: 3000,
  },
  {
    id: 2,
    date: '2024-12-02',
    type: 'Expense',
    category: 'Groceries',
    comment: 'Weekly shopping',
    sum: 150,
  },
];

function TransactionList() {
  const reduxTransactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectTransLoading);
  const isError = useSelector(selectTransError);
  const categories = useSelector(selectCategories);

  const { isMobile } = useMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxTransactions.length === 0) {
      initialTransactions.forEach(transaction =>
        dispatch(addTransactions(transaction))
      );
    }
    localStorage.setItem('transactions', JSON.stringify(reduxTransactions));
  }, [reduxTransactions, dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p className={s.text}>Oops, something went wrong...</p>}
      {!isLoading && reduxTransactions.length === 0 ? (
        <div className={s.container}>
          {/* <p>No transactions available yet.</p>{' '}
          <p> Let&#39;s add your first transaction:</p> */}
          <FormButton
            type="button"
            text={'Add transaction'}
            variant={'multiColorButton'}
            handlerFunction={() => dispatch(openAddModal())}
          />
        </div>
      ) : (
        <>
          {!isMobile && (
            <ul className={s.head_row}>
              {getHeadTransaction().map((value, idx) => {
                return (
                  <li key={idx} className={s.row_item}>
                    {value}
                  </li>
                );
              })}
              <li className={s.row_item}></li>
            </ul>
          )}
          <ul className={s.list}>
            {getFormattedTransactions(reduxTransactions, categories).map(
              ({ id, ...item }) => (
                <TransactionItem key={id} id={id} transaction={item} />
              )
            )}
          </ul>
        </>
      )}
    </>
  );
}

export default TransactionList;
