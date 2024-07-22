import { useNavigate } from 'react-router-dom';
import Button from './Button';
import styles from './LeftUILayout.module.css';

function LeftUILayout({ children, prev, next }) {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(prev);
  };
  const handleNext = () => {
    navigate(next);
  };

  return (
    <div className={styles.container}>
      <div className={styles.child}>{children}</div>
      <div className={styles.footer}>
        {prev && (
          <Button
            primary
            onClick={handlePrev}
            className={styles.navBtn}
            to={prev}
          >
            &#9001; Prev
          </Button>
        )}
        {next && (
          <Button
            primary
            onClick={handleNext}
            className={styles.navBtn}
            to={next}
          >
            Next &#9002;
          </Button>
        )}
      </div>
    </div>
  );
}

export default LeftUILayout;
