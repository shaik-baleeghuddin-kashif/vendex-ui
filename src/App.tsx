import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from "./components/SideBar"
import Dashboard from './pages/Dashboard';
import Vendors from './pages/Vendors';
import Circuits from './pages/Circuits';
import Sites from './pages/Sites';
import Maintenances from './pages/Maintenances';
import Admin from './pages/Admin';

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-100 flex">
      <Router>
        <SideBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/vendors' element={<Vendors />} />
          <Route path='/circuits' element={<Circuits />} />
          <Route path='/sites' element={<Sites />} />
          <Route path='/maintenances' element={<Maintenances />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App