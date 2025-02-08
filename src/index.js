import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Use createRoot for React 18+
import App from './App';
import './App.css';

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);