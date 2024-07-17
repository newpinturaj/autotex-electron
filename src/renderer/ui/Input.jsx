import React from 'react';
import styles from './Input.module.css';

// function Input(props) {
//   // const { register } = useFormContext();
//   const { ref, ...rest } = props;
//   // console.log(props);
//   return (
//     <div className={styles.container}>
//       <input
//         className={styles.input}
//         {...rest}
//         ref={e => {
//           ref.current = e;
//         }}
//       />
//     </div>
//   );
// }

const Input = React.forwardRef((props, ref) => (
  <div className={styles.container}>
    {/* <input
      name={name}
      onBlur={onBlur}
      ref={ref}
      onChange={onChange}
      className={styles.input}
    /> */}
    <input className={styles.input_field} {...props} ref={ref} />
  </div>
));

export default Input;
