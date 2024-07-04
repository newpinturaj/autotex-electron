import { useFormContext } from 'react-hook-form';
import styles from './Form.module.css';

function Form({ children, onSubmit }) {
  const { handleSubmit } = useFormContext();

  // function onSubmit(value) {
  //   // e.preventDefault();

  //   console.log(value);
  // }

  return (
    <form
      method="POST"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form_container}
    >
      {children}
    </form>
  );
}

export default Form;
