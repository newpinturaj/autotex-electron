import styles from './Button.module.css';

function Button({ children, className, type, onClick, primary = false }) {
  return (
    <button
      className={`${primary ? styles.primary : styles.secondary} ${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
