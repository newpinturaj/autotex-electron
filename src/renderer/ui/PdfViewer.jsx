import { useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { Document, Page, pdfjs } from 'react-pdf';
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/AnnotationLayer.css';
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './PdfViewer.module.css';
import genLatex from '../features/college-report/common';
import Button from './Button';
import FlexBox from './FlexBox';
import MessageBox from './MessageBox';

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

const renderPDF = async (setPdfData, setIsCompiling, setError) => {
  try {
    setError('');
    setIsCompiling(true);
    const latex = genLatex();
    window.electronAPI.sendLatex(latex);
  } catch (err) {
    console.log(err);
    setIsCompiling(false);
  }
};

function PdfViewer() {
  const [pdfData, setPdfData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [maxPage, setMaxPage] = useState(undefined);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isPdfExporting, setIsPdfExporting] = useState(false);
  const [isTexExporting, setIsTexExporting] = useState(false);
  const [error, setError] = useState('');
  const { width, height, ref } = useResizeDetector();

  const handleLoadSuccess = (value) => {
    setMaxPage(value?.numPages);
  };

  const handleExportPDF = async () => {
    try {
      setIsPdfExporting(true);
      const latex = genLatex();
      await window.electronAPI.exportAsPDF(latex);
    } catch (err) {
      console.log(err);
      setIsPdfExporting(false);
    }
  };

  const handleExportTex = async () => {
    try {
      setIsTexExporting(true);
      const latex = genLatex();
      await window.electronAPI.exportAsTex(latex);
    } catch (err) {
      setIsTexExporting(false);
      console.log(err);
    }
  };

  useEffect(() => {
    // Event Listeners
    window.electronAPI.onPDFBuffer((bufferArray) => {
      setIsCompiling(false);
      if (bufferArray) {
        setPdfData(bufferArray);
      }
    });

    window.electronAPI.onError((err) => {
      setError(err);
      setIsCompiling(false);
      setIsPdfExporting(false);
      setIsTexExporting(false);
      // throw new Error(err);
      // console.log(err);
    });

    window.electronAPI.onFinish(() => {
      setIsPdfExporting(false);
      setIsTexExporting(false);
    });

    window.electronAPI.onCancel(() => {
      setIsPdfExporting(false);
      setIsTexExporting(false);
    });

    renderPDF(setPdfData, setIsCompiling, setError);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <Button
          disabled={isCompiling}
          type="button"
          onClick={() => {
            renderPDF(setPdfData, setIsCompiling, setError);
          }}
        >
          {isCompiling ? 'Compiling...' : 'Recompile'}
        </Button>
        <FlexBox className={styles.flexContainer}>
          <Button
            disabled={isPdfExporting}
            type="button"
            onClick={handleExportPDF}
          >
            {isPdfExporting ? 'Exporting...' : 'Export PDF'}
          </Button>
          <Button
            disabled={isTexExporting}
            type="button"
            onClick={handleExportTex}
          >
            {isTexExporting ? 'Exporting...' : 'Export TeX'}
          </Button>
        </FlexBox>

        <FlexBox className={styles.flexContainer}>
          {pageNo > 1 && (
            <Button type="button" onClick={() => setPageNo((curr) => curr - 1)}>
              &#9001;
            </Button>
          )}
          {pageNo < maxPage && (
            <Button type="button" onClick={() => setPageNo((curr) => curr + 1)}>
              &#9002;
            </Button>
          )}
        </FlexBox>
      </div>
      <div className={styles.temp}>
        <div ref={ref} className={styles.pdfContainer}>
          {isCompiling && !error && <MessageBox message="Compiling..." />}
          {error && (
            <MessageBox
              type="error"
              message={error.message || 'Something went wrong! Try again'}
            />
          )}
          {!error && !isCompiling && (
            <Document
              noData={<MessageBox message="No Data to Preview" />}
              loading={<MessageBox message="Loading..." />}
              onLoadError={
                <MessageBox
                  type="error"
                  message="Error while loading, try again"
                />
              }
              onLoadProgress={({ loaded, total }) => {
                <MessageBox
                  type="success"
                  message={`Loading... ${(loaded / total) * 100}`}
                />;
              }}
              onLoadSuccess={handleLoadSuccess}
              file={pdfData}
            >
              <Page
                loading={<MessageBox message="Loading Page..." />}
                pageNumber={pageNo}
                height={height}
                width={width}
              />
            </Document>
          )}
        </div>
      </div>
    </div>
  );
}

export default PdfViewer;
