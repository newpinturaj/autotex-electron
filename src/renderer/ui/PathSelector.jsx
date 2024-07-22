import React from 'react';
import Button from './Button';
import Input from './Input';
import styles from './PathSelector.module.css';

const PathSelector = React.forwardRef((props, ref) => {
  return (
    <div className={styles.container}>
      <Input disabled {...props} ref={ref} className={styles.input_field} />
      <Button onClick={props.onClick} className={styles.btn}>
        Select Path
      </Button>
    </div>
  );
});

export default PathSelector;
