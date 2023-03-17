import React from 'react';
import './App.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Home';
import Work from './Work';

export default function App() {  
      return (
        <>
          {/* <Navbar/> */}
          <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route index element={<Home />} />
                <Route path='work' element={<Work/>}/>
            </Routes>
          </BrowserRouter>
        </>
    );
  }


