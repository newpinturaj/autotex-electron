import styles from './Fieldset.module.css';

function Fieldset({ children, name }) {
  return (
    <div className={styles.container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{name}</legend>
        {children}
      </fieldset>
    </div>
  );
}

export default Fieldset;
