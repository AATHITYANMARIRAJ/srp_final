import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About.js';
import Prediction from './Pages/Prediction.js';
import Data from './Pages/Data.js';
import Data1 from './Pages/Data1.js';
import Data2 from './Pages/Data2.js';
import Data3 from './Pages/Data3.js';
import Data4 from './Pages/Data4.js';
import Data5 from './Pages/Data5.js';
import Data6 from './Pages/Data6.js';
import Data7 from './Pages/Data7.js';
import Data8 from './Pages/Data8.js';
import Data9 from './Pages/Data9.js';
import Data10 from './Pages/Data10.js';
import Data11 from './Pages/Data11.js';
import Data12 from './Pages/Data12.js';
import Data13 from './Pages/Data13.js';
import Data14 from './Pages/Data14.js';
import Data15 from './Pages/Data15.js';
import Data16 from './Pages/Data16.js';

import Quiz from './Pages/Quiz.js';
import Quiz1 from './Pages/Quiz1.js';
import Quiz2 from './Pages/Quiz2.js';
import Quiz3 from './Pages/Quiz3.js';
import Quiz4 from './Pages/Quiz4.js';
import Quiz5 from './Pages/Quiz5.js';
import Quiz6 from './Pages/Quiz6.js';
import Quiz7 from './Pages/Quiz7.js';
import Quiz8 from './Pages/Quiz8.js';
import Quiz9 from './Pages/Quiz9.js';
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
          <Route element={<Data5/>} path='/data5'/>
          <Route element={<Data6/>} path='/data6'/>
          <Route element={<Data7/>} path='/data7'/>
          <Route element={<Data8/>} path='/data8'/>
          <Route element={<Data9/>} path='/data9'/>
          <Route element={<Data10/>} path='/data10'/>
          <Route element={<Data11/>} path='/data11'/>
          <Route element={<Data12/>} path='/data12'/>
          <Route element={<Data13/>} path='/data13'/>
          <Route element={<Data14/>} path='/data14'/>
          <Route element={<Data15/>} path='/data15'/>
          <Route element={<Data16/>} path='/data16'/>

          <Route element={<Quiz/>} path='/quiz'/>
          <Route element={<Quiz1/>} path='/quiz1'/>
          <Route element={<Quiz2/>} path='/quiz2'/>
          <Route element={<Quiz3/>} path='/quiz3'/>
          <Route element={<Quiz4/>} path='/quiz4'/>
          <Route element={<Quiz5/>} path='/quiz5'/>
          <Route element={<Quiz6/>} path='/quiz6'/>
          <Route element={<Quiz7/>} path='/quiz7'/>
          <Route element={<Quiz8/>} path='/quiz8'/>
          <Route element={<Quiz9/>} path='/quiz9'/>
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

