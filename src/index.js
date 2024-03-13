import React from 'react'
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import CryptoContext from './CryptoContext';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <Dashboard />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById('root')
)
