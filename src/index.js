import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';

const Root = ()=>{ 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
reportWebVitals();
