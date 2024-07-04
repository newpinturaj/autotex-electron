import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import ReportBasicDetails from './features/college-report/ReportBasicDetails';

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ReportBasicDetails />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;
