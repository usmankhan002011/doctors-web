import React from 'react';
import ReactDOM from 'react-dom/client';
import './Docweb.sass';
// import './index.sass';
// import App1 from './App1';
import Docweb from './Docweb';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App1 /> */}
    <Docweb/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
