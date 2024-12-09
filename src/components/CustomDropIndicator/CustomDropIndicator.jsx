// import React from 'react';
// import { Icon } from '../../icons';

// import style from './CustomDropIndicator.module.css';

// function CustomDropIndicator({ up }) {
//   return (
//     <div>
//       <Icon
//         id={up ? '#icon-vector-up' : '#icon-vector-down'}
//         className={style.icon}
//       />
//     </div>
//   );
// }

// export default CustomDropIndicator;
import React from 'react';
import PropTypes from 'prop-types';

const CategoryDropdown = ({ categories, onSelect }) => {
  return (
    <select onChange={e => onSelect(e.target.value)}>
      <option value="">Select category</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

CategoryDropdown.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CategoryDropdown;
