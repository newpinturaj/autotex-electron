import React from 'react';
import Button from './Button';
import Input from './Input';
import styles from './PathSelector.module.css';

// function PathSelector() {
//   const [inputData, setInputData] = useState('Dummy Data');

//   const handleChange = (e) => {
//     setInputData(e.target.value);
//   };

//   const handleClick = () => {
//     console.log('clicked');
//   };

//   return (
//     <div className={styles.container}>
//       <Input
//         disabled
//         name="inputData"
//         value={inputData}
//         onChange={handleChange}
//       />
//       <Button onClick={handleClick} className={styles.btn}>
//         Select Image
//       </Button>
//     </div>
//   );
// }

const PathSelector = React.forwardRef((props, ref) => {
  return (
    <div className={styles.container}>
      <Input disabled {...props} ref={ref} className={styles.input_field} />
      <Button onClick={props.onClick} className={styles.btn}>
        Select Image
      </Button>
    </div>
  );
});

export default PathSelector;
