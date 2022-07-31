import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Shopping from './pages/Shopping';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App />}/>
      <Route path='/shopping' element = {<Shopping/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

