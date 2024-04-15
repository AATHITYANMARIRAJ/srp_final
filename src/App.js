import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About.js';
import Prediction from './Pages/Prediction.js';
import Data from './Pages/Data.js';
import Data1 from './Pages/Data1.js';
import Data2 from './Pages/Data2.js';
import Data3 from './Pages/Data3.js';
import Data4 from './Pages/Data4.js';
import Quiz from './Pages/Quiz.js';
import Quiz1 from './Pages/Quiz1.js';

import Background from './Images/BACKGROUND2.jpg'
import { useNavigate } from 'react-router-dom';
import './main.css';


export default function myApp(){
  return(
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route element={<About/>} path='/about'/>
          <Route element={<Prediction/>} path='/prediction'/>
          <Route element={<Data/>} path='/data'/>
          <Route element={<Data1/>} path='/data1'/>
          <Route element={<Data2/>} path='/data2'/>
          <Route element={<Data3/>} path='/data3'/>
          <Route element={<Data4/>} path='/data4'/>
          <Route element={<Quiz/>} path='/quiz'/>
          <Route element={<Quiz1/>} path='/quiz1'/>
          <Route element={<Index/>} path='/'/>
        </Routes>
      </BrowserRouter>
    </div>

  )
  }
function Index(){
    const navigate=useNavigate();
    return(
    <div style={{ backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' }} >
    <div className='card'>
      <h2>Welcome to Our Website</h2>
      <p>We're excited to have you here. Explore our content to learn more!</p>
      <button onClick={() => navigate('/about')}>Explore</button>
    </div>
    </div>
  
    )

}

