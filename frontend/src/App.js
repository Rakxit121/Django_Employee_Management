import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Change Switch to Routes
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import ViewEmployees from './components/ViewEmployees';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/add-employee" element={<AddEmployee />} /> {/* Use element prop instead of component */}
          <Route path="/" element={<ViewEmployees />} /> {/* Use element prop instead of component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
