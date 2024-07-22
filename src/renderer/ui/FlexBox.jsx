import styles from './FlexBox.module.css';

function FlexBox({ children, className }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}

export default FlexBox;
