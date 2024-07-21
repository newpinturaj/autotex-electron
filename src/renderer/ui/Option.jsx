import styles from './Option.module.css';

function Option(props) {
  const { children, ...rest } = props;
  return (
    <option className={styles.options} {...rest}>
      {children}
    </option>
  );
}

export default Option;
