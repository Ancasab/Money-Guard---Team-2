import React, { useEffect } from 'react';
import Modal from 'react-modal';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeEditModal,
  selectIsEditModalOpen,
} from '../../redux/Modals/slice';
import { getTransactionsCategories } from '../../redux/Statistics/operations';
import { updateBalance } from '../../redux/Auth/slice';
import { selectBalance } from '../../redux/Auth/slice'; // Selector pentru balanță

import s from './ModalEditTransaction.module.css';

Modal.setAppElement('#root');

function ModalEditTransaction() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsEditModalOpen);

  // Obține balanța curentă din Redux
  const balance = useSelector(selectBalance);

  // Când modalul se deschide, obține categoriile
  useEffect(() => {
    dispatch(getTransactionsCategories());
  }, [dispatch]);

  const handleUpdateBalance = newBalance => {
    // Actualizează balanța în Redux (dacă e nevoie)
    dispatch(updateBalance(newBalance)); // Ai grijă ca updateBalance să fie definit corect în slice-ul tău
  };

  return (
    <Modal
      isOpen={isOpenModal}
      className={s.modal}
      overlayClassName={s.modal_Wrap}
      onRequestClose={() => dispatch(closeEditModal())}
    >
      <div className={s.modal_close} onClick={() => dispatch(closeEditModal())}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path d="M1 1L17 17" stroke="#FBFBFB" />
          <path d="M1 17L17 0.999999" stroke="#FBFBFB" />
        </svg>
      </div>
      <h2>Edit transaction</h2>
      <EditTransactionForm
        currentBalance={balance}
        handleUpdateBalance={handleUpdateBalance}
      />
    </Modal>
  );
}

export default ModalEditTransaction;
