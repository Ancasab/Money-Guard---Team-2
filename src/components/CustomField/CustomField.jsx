import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';

import css from './CustomField.module.css';
import { Icon } from '../../icons';

import Icons from '../../sprite.svg';

const CustomField = ({ type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={css.field}>
      <label className={css.label}>
        <Field className={css.input} type={showPassword ? 'text' : type} name={name} placeholder={placeholder} autocomplete="off" />
        {type === 'password' ? (
          <svg className={`${css.icon} ${css.iconPassword}`} onClick={() => setShowPassword(!showPassword)}>
            <use href={`${Icons}${showPassword ? '#icon-eye-blocked' : '#icon-eye'}`} />
          </svg>
        ) : (
            <Icon id={name === 'email' ? '#icon-email' : '#icon-user'} className={css.icon} />
        )}
      </label>
      <ErrorMessage name={name} component={'p'} className={css.errorMessage} />
    </div>
  );
};

export default CustomField;