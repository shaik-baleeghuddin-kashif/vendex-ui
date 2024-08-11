import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Dashboard from './pages/Dashboard';
import Vendors from './pages/Vendors';
import Circuits from './pages/Circuits';
import Sites from './pages/Sites';
import Maintenances from './pages/Maintenances';
import Admin from './pages/Admin';
import Docs from './pages/Docs';
import NotFound from './pages/NotFound';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-100 flex">
      {location.pathname !== '/docs' && <SideBar />}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/vendors' element={<Vendors />} />
        <Route path='/circuits' element={<Circuits />} />
        <Route path='/sites' element={<Sites />} />
        <Route path='/maintenances' element={<Maintenances />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
