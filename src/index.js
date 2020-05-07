import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/popper.js/dist/umd/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
