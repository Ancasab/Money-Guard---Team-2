import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import icons from '../../sprite.svg';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
      >
        <div className={styles.linkIcon}>
          <svg className={styles.homeIcon}>
            <use href={`${icons}#icon-home`}></use>
          </svg>
        </div>
        <span className={styles.linkText}>Home</span>
      </NavLink>

      <NavLink
        to="/dashboard/statistics"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink} `
        }
      >
        <div className={styles.linkIcon}>
          <svg className={styles.graphicIcon}>
            <use href={`${icons}#icon-graphic`}></use>
          </svg>
        </div>
        <span className={styles.linkText}>Statistics</span>
      </NavLink>

      <NavLink
        to="currency"
        className={({ isActive }) =>
          isActive
            ? `${styles.navLink} ${styles.active}`
            : `${styles.navLink} ${styles.currencyLink}`
        }
      >
        <div className={styles.linkIcon}>
          <svg className={styles.currencyIcon}>
            <use href={`${icons}#icon-currency`}></use>
          </svg>
        </div>
        <span className={styles.linkText}>Currency</span>
      </NavLink>
    </div>
  );
};

export default Navigation;