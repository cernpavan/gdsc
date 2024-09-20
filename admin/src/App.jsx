import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'; // Ensure this file exists with appropriate styles
import CreateSubadmin from './pages/CreateSubamin/CreateSubadmin';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/subadmin/add" element={<CreateSubadmin />} /> {/* Fixed path */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
