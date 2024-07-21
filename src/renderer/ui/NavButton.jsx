import { NavLink } from 'react-router-dom';
import styles from './NavButton.module.css';

function NavButton({ children, to }) {
  return (
    <NavLink to={to} className={styles.navBtn}>
      {children}
    </NavLink>
  );
}

export default NavButton;
