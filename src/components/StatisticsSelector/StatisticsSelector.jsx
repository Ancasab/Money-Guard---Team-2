import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { getTransactionsSummaryByPeriod } from '../../redux/Statistics/operations';
import {
  monthName,
  currentMonth,
  currentYear,
  optionsMonth,
  optionsYear,
} from './serviceSelect';

import CustomDropIndicator from '../CustomDropIndicator/CustomDropIndicator';

import style from './StatisticsSelector.module.css';
import { styleSelect } from './styleSelect';

function StatisticsSelector() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);

  const [month, setMonth] = useState({ value: currentMonth, label: monthName });
  const [year, setYear] = useState({ value: currentYear, label: currentYear });
  const [monthOptions, setMonthOptions] = useState([]);

  const handleMonthChange = selectedMonth => {
    setMonth(selectedMonth);
  };

  const handleYearChange = selectedYear => {
    setYear(selectedYear);
  };

  useEffect(() => {
    if (isAuth) {
      dispatch(
        getTransactionsSummaryByPeriod({ month: month.value, year: year.value })
      );
    }
  }, [dispatch, isAuth, month, year]);

  const filteredYearOptions = optionsYear.filter(
    option => option.value <= currentYear
  );

  useEffect(() => {
    console.log('Year changed:', year);
    const filteredOptions = optionsMonth.filter(option => {
      if (Number(year.value) === currentYear) {
        return option.value <= currentMonth;
      } else {
        return true;
      }
    });
    console.log('Filtered options:', filteredOptions);
    setMonthOptions(filteredOptions);
  }, [year]);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuIsOpen(true);
  };

  const handleMenuClose = () => {
    setMenuIsOpen(false);
  };

  const [yearIsOpen, setYearIsOpen] = useState(false);

  const handleYearOpen = () => {
    setYearIsOpen(true);
  };

  const handleYearClose = () => {
    setYearIsOpen(false);
  };

  return (
    <div className={style.selectContainer}>
      <Select
        className={style.select}
        styles={styleSelect}
        options={monthOptions}
        value={month}  // Obiect complet
        onChange={handleMonthChange}
        name="optionsMonth"
        id="month-select"
        placeholder={month.label}
        isSearchable={false}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        components={{
          DropdownIndicator: () => {
            return menuIsOpen ? (
              <CustomDropIndicator up={true} />
            ) : (
              <CustomDropIndicator up={false} />
            );
          },
        }}
      />
      <Select
        className={style.select}
        styles={styleSelect}
        options={filteredYearOptions}
        value={year}  // Obiect complet
        onChange={handleYearChange}
        name="optionYear"
        id="years-select"
        placeholder={year.label}
        isSearchable={false}
        onMenuOpen={handleYearOpen}
        onMenuClose={handleYearClose}
        components={{
          DropdownIndicator: () => {
            return yearIsOpen ? (
              <CustomDropIndicator up={true} />
            ) : (
              <CustomDropIndicator up={false} />
            );
          },
        }}
      />
    </div>
  );
}

export default StatisticsSelector;
