import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Ketersediaan from './pages/Ketersediaan';
import DashboardOwner from './pages/DashboardOwner';
import AddLapangan from './components/AddLapangan';
import Calendar from './components/Calendar';
import ListLapangan from './components/ListLapangan'
import EditLapangan from './components/EditLapangan'
import MonthlyStats from './models/pendapatan';
import MonthDropdown from './models/pendapatan';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="addLapangan" element={<AddLapangan/>}/>
        <Route path="ListLapangan" element={<ListLapangan/>}/>
        <Route path="ListLapangan/EditLapangan/:id" element={<EditLapangan/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
        <Route path="MonthDropdown" element={<MonthDropdown/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;