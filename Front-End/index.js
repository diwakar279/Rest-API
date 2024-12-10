import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import './index.css';

// Set default base URL for axios requests
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Add default headers for axios requests
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Intercept requests to add auth token if it exists
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
