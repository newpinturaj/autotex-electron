import styles from './FlexBox.module.css';

function FlexBox({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default FlexBox;
