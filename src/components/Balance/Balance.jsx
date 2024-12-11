import { useEffect } from "react";
import styles from "./Balance.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBalanceThunk } from "../../redux/Auth/operations";

export function formatNumberWithSpaces(number) {
  const roundedNumber = Number(number).toFixed(2);
  const parts = roundedNumber.split(".");
  const integerPartWithSpaces = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${integerPartWithSpaces}.${parts[1]}`;
}

function Balance() {
  const dispatch = useDispatch();
  const selectBalance = state => state.auth.user.balance;

  useEffect(() => {
    dispatch(getBalanceThunk());
  }, [dispatch]);

  const balance = useSelector(selectBalance);

  return (
    <div className={styles.balance}>
      <h3>Your balance</h3>
      <p>
        ₴ <span>{balance ? formatNumberWithSpaces(balance) : "0.00"}</span>
      </p>
    </div>
  );
}

export default Balance;

