import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ServiceList from './components/ServiceList';
import ServiceEdit from './components/ServiceEdit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="services" />} />
              <Route path="/services" element={<ServiceList />} />
              <Route path="/services/:id" element={<ServiceEdit />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
