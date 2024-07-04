// import 'katex/dist/katex.min.css';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import PDFContext from '../context/PDFContext';
import PdfViewer from './PdfViewer';

function AppLayout() {
  return (
    <PDFContext>
      <div className={styles.container}>
        <div className={styles.left}>
          <Outlet />
        </div>
        <div className={styles.right}>
          <PdfViewer />
        </div>
      </div>
    </PDFContext>
  );
}

export default AppLayout;
