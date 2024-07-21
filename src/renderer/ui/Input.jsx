import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return props.rows === undefined ? (
    <input
      {...props}
      className={`${styles.input_field} ${props.className && props.className}`}
      ref={ref}
    />
  ) : (
    <textarea
      {...props}
      className={`${styles.input_field} ${props.className && props.className}`}
      ref={ref}
    />
  );
});

export default Input;

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

// <input
//   name={name}
//   onBlur={onBlur}
//   ref={ref}
//   onChange={onChange}
//   className={styles.input}
// />;
