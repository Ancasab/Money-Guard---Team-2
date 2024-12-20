import React from 'react';
import { Icon } from '../../icons';
import style from '../CustomDropIndicator/CustomDropIndicator.module.css';

function CustomDropIndicator({ up }) {
  return (
    <div>
      <Icon
        id={up ? '#icon-vector-up' : '#icon-vector-down'}
        className={style.icon}
      />
    </div>
  );
}

export default CustomDropIndicator;
