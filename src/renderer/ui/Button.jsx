import styles from './Button.module.css';

function Button({
  children,
  className,
  type,
  onClick,
  primary = false,
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      className={`${primary ? styles.primary : styles.secondary} ${className} ${
        disabled && styles.disabled
      }`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
