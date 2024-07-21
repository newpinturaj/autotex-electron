// -------- PDFVIEWER ----------

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

// async function handlePDFPreview() {
//   try {
//     const path = 'C:\\Users\\pintu\\Downloads\\test\\test.pdf';
//     const pdf = await window.electronAPI.loadPDF(path);
//     if (!pdf) {
//       throw new Error('Error Fetching PDF');
//     }
//     setPdfData(pdf);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// ------- MAIN CONTENT ------------

// const onSubmit = async (value) => {
//   let latex = window.localStorage.getItem('basicInfo');
//   latex = latex.concat(genMainContent(value.mainContent));
//   // const data = genMainContent(value.mainContent);
//   // console.log(data);
//   console.log(latex);
// };

// ----------- REFERENCES ----------

// const onSubmit = async (value) => {
//   window.localStorage.setItem('references', JSON.stringify(value.references));
//   const latex = genLatex();
//   await window.electronAPI.saveAsPDF(latex);
// };
