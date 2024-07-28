
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './auth';
import Customers from './pages/customers';
import Inventory from './pages/inventory'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}
