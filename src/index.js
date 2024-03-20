import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Homepage';
import Coursepage from './pages/Coursepage';
import LoginPage from './pages/Loginpage';
import Department from './pages/Departmentpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" >
      <Route index element={<Home />} />
      <Route path="/dept/:duid/course/:cuid" element={<Coursepage></Coursepage>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/department" element={<Department/>} />
    </Route>
  </Routes> 
</BrowserRouter>
);