import React from 'react';
import styles from './Select.module.css';

const Select = React.forwardRef((props, ref) => (
  <select className={styles.select} {...props} ref={ref}>
    {props.children}
  </select>
));

export default Select;
