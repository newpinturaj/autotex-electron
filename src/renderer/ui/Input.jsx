import React from 'react';

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
  <div>
    {/* <input
      name={name}
      onBlur={onBlur}
      ref={ref}
      onChange={onChange}
      className={styles.input}
    /> */}
    <input {...props} ref={ref} />
  </div>
));

export default Input;
