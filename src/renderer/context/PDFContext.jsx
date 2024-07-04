import { createContext, useContext, useState } from 'react';

const Context = createContext();

function PDFContext({ children }) {
  const [pdfPath, setPdfPath] = useState('');

  return (
    <Context.Provider value={(pdfPath, setPdfPath)}>
      {children}
    </Context.Provider>
  );
}

function usePDFContext() {
  const values = useContext(Context);

  if (values === undefined) {
    throw new Error('Called outside the context');
  }

  return values;
}

export { usePDFContext };
export default PDFContext;
