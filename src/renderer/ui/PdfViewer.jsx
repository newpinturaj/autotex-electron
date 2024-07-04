import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/AnnotationLayer.css';
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './PdfViewer.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PdfViewer() {
  // const { pdfPath } = usePDFContext();
  const [pdfData, setPdfData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [maxPage, setMaxPage] = useState(undefined);

  function handleClick() {
    // const res = await axios.get('/api/v1/latex/pdf/getpdf');
    fetch('/api/v1/latex/pdf/getpdf')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        setPdfData(data);
        return null;
      })
      .catch((error) => {
        console.error('Error fetching PDF:', error);
      });
    // console.log(res.data);
    // setPdfData(res.data);
  }

  const handleLoadSuccess = (value) => {
    console.log(value);
    setMaxPage(value?.numPages);
    console.log(maxPage);
  };

  async function handleDownload() {
    await fetch('/api/v1/latex/pdf/download');
  }

  return (
    <div className={styles.container}>
      <div>
        <button type="submit" onClick={handleClick}>
          Preview PDF
        </button>
      </div>
      {pdfData ? (
        <>
          {pageNo > 1 && (
            <button type="button" onClick={() => setPageNo((curr) => curr - 1)}>
              Prev Page
            </button>
          )}
          {pageNo < maxPage && (
            <button type="button" onClick={() => setPageNo((curr) => curr + 1)}>
              Next Page
            </button>
          )}
          <a href="http://localhost:8000/v1/latex/pdf/download">Download PDF</a>
          <Document file={pdfData} onLoadSuccess={handleLoadSuccess}>
            <Page pageNumber={pageNo} />
          </Document>
        </>
      ) : (
        <p>No PDF to Preview, Generate a Pdf to Preview</p>
      )}
    </div>
  );
}

export default PdfViewer;
