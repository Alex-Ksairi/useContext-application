import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// BrowserRouter
import { BrowserRouter } from "../node_modules/react-router-dom";

// Provider
import { Provider } from "./store/context";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


