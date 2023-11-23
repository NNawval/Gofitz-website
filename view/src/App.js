import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Ketersediaan from './pages/Ketersediaan';
import DashboardOwner from './pages/DashboardOwner';
import AddLapangan from './components/AddLapangan';
import Calendar from './components/Calendar';
import ListLapangan from './components/ListLapangan'
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="addLapangan" element={<AddLapangan/>}/>
        <Route path="ListLapangan" element={<ListLapangan/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
