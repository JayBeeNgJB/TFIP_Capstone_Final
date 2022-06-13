import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  