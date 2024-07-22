import styles from './MessageBox.module.css';

function MessageBox({ message, type = '' }) {
  return (
    <p
      className={`${styles.message} ${type === 'warning' && styles.warning} ${
        type === 'success' && styles.success
      } ${type === 'error' && styles.error}`}
    >
      {message}
    </p>
  );
}

export default MessageBox;
