import styles from './FormRow.module.css';

function FormRow({ label, error, children }) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {/* <span className={styles.error}>This field is required</span> */}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default FormRow;
