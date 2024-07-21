import { useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaArrowRotateRight } from 'react-icons/fa6';
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/AnnotationLayer.css';
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './PdfViewer.module.css';
import genLatex from '../features/college-report/common';
import Button from './Button';

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

const renderPDF = async (setPdfData, setIsCompiling) => {
  try {
    const latex = genLatex();
    window.electronAPI.sendLatex(latex);
    window.electronAPI.onPDFBuffer((bufferArray) => {
      if (bufferArray) {
        setPdfData(bufferArray);
      }
    });
  } catch (err) {
    console.log(err);
    setIsCompiling(false);
  }
};

function PdfViewer() {
  // const { pdfPath } = usePDFContext();
  const [pdfData, setPdfData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [maxPage, setMaxPage] = useState(undefined);
  const [isCompiling, setIsCompiling] = useState(false);
  const { width, height, ref } = useResizeDetector();

  const handlePDFCompilation = async () => {
    try {
      let pdfLoc = window.localStorage.getItem('pdfLoc');
      if (pdfLoc === null) {
        pdfLoc = await window.electronAPI.saveLoc();
        window.localStorage.setItem('pdfLoc', pdfLoc);
      }
      setIsCompiling(true);
      const latex = genLatex();
      console.log(latex);
      await window.electronAPI.saveAsPDF({ path: pdfLoc, latex });
      await window.electronAPI.onPdfGen(async (args) => {
        console.log(args);
        setIsCompiling(false);
        const pdf = await window.electronAPI.loadPDF(pdfLoc);
        if (!pdf) {
          console.log('Error Fetching PDF');
          return;
        }
        setPdfData(pdf);
      });
    } catch (err) {
      console.log(err);
      setIsCompiling(false);
    }
  };

  const handleLoadSuccess = (value) => {
    console.log(value);
    setMaxPage(value?.numPages);
    console.log(maxPage);
  };

  useEffect(() => {
    async function renderPdf() {
      try {
        let pdfLoc = window.localStorage.getItem('pdfLoc');
        if (pdfLoc === null) {
          pdfLoc = await window.electronAPI.saveLoc();
          window.localStorage.setItem('pdfLoc', pdfLoc);
        }
        setIsCompiling(true);
        const latex = genLatex();
        await window.electronAPI.saveAsPDF({ path: pdfLoc, latex });
        await window.electronAPI.onPdfGen(async (args) => {
          console.log(args);
          setIsCompiling(false);
          const pdf = await window.electronAPI.loadPDF(pdfLoc);
          if (!pdf) {
            console.log('Error Fetching PDF');
            return;
          }
          setPdfData(pdf);
        });
      } catch (err) {
        console.log(err);
        setIsCompiling(false);
      }
    }

    // renderPdf();

    renderPDF(setPdfData, setIsCompiling);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.compileBtn}>
        <Button type="button" onClick={handlePDFCompilation}>
          Recompile <FaArrowRotateRight />
        </Button>
      </div>

      {pdfData ? (
        <div ref={ref} className={styles.pdfContainer}>
          <div className={styles.btnContainer}>
            {pageNo > 1 && (
              <Button
                className={styles.pdfBtn}
                type="button"
                onClick={() => setPageNo((curr) => curr - 1)}
              >
                &#9001;
              </Button>
            )}
            {pageNo < maxPage && (
              <Button
                className={styles.pdfBtn}
                type="button"
                onClick={() => setPageNo((curr) => curr + 1)}
              >
                &#9002;
              </Button>
            )}
          </div>
          <Document file={pdfData} onLoadSuccess={handleLoadSuccess}>
            {isCompiling ? (
              <p>Compiling...</p>
            ) : (
              <Page pageNumber={pageNo} height={height} width={width} />
            )}
          </Document>
        </div>
      ) : (
        <p>No PDF to Preview, click on Compile/Recompile</p>
      )}
    </div>
  );
}

export default PdfViewer;

// <div>
//   <button type="button" onClick={handlePDFCompilation}>
//     Recompile
//   </button>
// </div>;

// <div className={styles.btnContainer}>
//   {pageNo > 1 && (
//     <button
//       className={styles.pdfBtn}
//       type="button"
//       onClick={() => setPageNo((curr) => curr - 1)}
//     >
//       &#9001; Prev
//     </button>
//   )}
//   {pageNo < maxPage && (
//     <button
//       className={styles.pdfBtn}
//       type="button"
//       onClick={() => setPageNo((curr) => curr + 1)}
//     >
//       Next &#9002;
//     </button>
//   )}
// </div>;
