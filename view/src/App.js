import React from 'react';
import './App.css';
// import Ketersediaan from './pages/Ketersediaan';
import Reservasi from './pages/Reservasi';
import ReservasiOngoing from './pages/ReservasiOngoing';

function App() {
  return (
    <div className="App">
      <Reservasi lapangan={1} online ={true} />
    </div>
  );
}

export default App;