import PropTypes from 'prop-types';
import styles from './FormButton.module.css';

const FormButton = ({
  type,
  text,
  handlerFunction,
  variant,
  isDisabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={handlerFunction}
      className={`${styles.formButton} ${styles[variant]}`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

FormButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  text: PropTypes.string.isRequired,
  handlerFunction: PropTypes.func,
  variant: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default FormButton;
