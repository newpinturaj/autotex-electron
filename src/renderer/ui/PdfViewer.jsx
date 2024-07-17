import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/AnnotationLayer.css';
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './PdfViewer.module.css';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

// @ts-expect-error This does not exist outside of polyfill which this is doing
if (typeof Promise.withResolvers === 'undefined') {
  if (window)
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    window.Promise.withResolvers = () => {
      let resolve;
      let reject;
      // eslint-disable-next-line promise/param-names
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    };
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PdfViewer() {
  // const { pdfPath } = usePDFContext();
  const [pdfData, setPdfData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [maxPage, setMaxPage] = useState(undefined);

  async function handlePDFPreview() {
    try {
      const pdf = await window.electronAPI.loadPDF();
      if (!pdf) {
        throw new Error('Error Fetching PDF');
      }
      setPdfData(pdf);
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleLoadSuccess = (value) => {
    console.log(value);
    setMaxPage(value?.numPages);
    console.log(maxPage);
  };

  return (
    <div className={styles.container}>
      <div>
        <button type="button" onClick={handlePDFPreview}>
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
          {/* <a href="http://localhost:8000/v1/latex/pdf/download">Download PDF</a> */}
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
