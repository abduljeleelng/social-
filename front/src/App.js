import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';
import './assets/css/style.min.css';

const App=()=>(
  <BrowserRouter>
  <MainRouter />
  </BrowserRouter>
) 
export default App;
