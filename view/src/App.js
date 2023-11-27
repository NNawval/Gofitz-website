import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Ketersediaan from './pages/Ketersediaan';
import DashboardOwner from './pages/DashboardOwner';
import AddLapangan from './components/AddLapangan';
import ListLapangan from './components/ListLapangan';
import EditLapangan from './components/EditLapangan';
import Navbar from './components/Navbar';
import ReservasiOngoing from './pages/ReservasiOngoing';
import Reservasi from './pages/Reservasi';
import Home from './pages/Home';

// import ReservasiOngoing from './pages/ReservasiOngoing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="add-lapangan" element={<AddLapangan/>}/>
        <Route path="list-lapangan" element={<ListLapangan/>}/>
        <Route path="list-lapangan/edit-lapangan/:id" element={<EditLapangan/>}/>
        <Route path="keuangan" element={<DashboardOwner/>}/>
        <Route path="ketersediaan" element={<Ketersediaan kondisi="online"/>}/>
        <Route path="ketersediaan-onsite" element={<Ketersediaan kondisi="onSite"/>}/>
        <Route path="ketersediaan-ubah-reservasi" element={<Ketersediaan kondisi="ubahReservasi"/>}/>
        <Route path="ubah-reservasi" element={<ReservasiOngoing />}/>
        <Route path="reservasi" element={<Reservasi online={true} />}/>
        <Route path="reservasi-onsite" element={<Reservasi online={false} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;