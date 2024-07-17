import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import AppLayout from './ui/AppLayout';
import ReportBasicDetails from './features/college-report/ReportBasicDetails';
import MainContent from './features/college-report/MainContent';
import References from './features/college-report/References';
import AppLayout from './ui/AppLayout';
// import Test from './Test';

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route index element={<ReportBasicDetails />} />
        {/* <Route index element={<References />} /> */}
        <Route element={<AppLayout />}>
          <Route path="mainContent" element={<MainContent />} />
          <Route index path="references" element={<References />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;
