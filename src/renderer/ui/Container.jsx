import styles from './Container.module.css';

function Container({ heading, children }) {
  return (
    <div>
      {heading && <h3 className={styles.heading}>{heading}</h3>}
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Container;
