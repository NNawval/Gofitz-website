import React from 'react';
import './App.css';
import Ketersediaan from './pages/Ketersediaan';
// import ReservasiOngoing from './pages/ReservasiOngoing';

function App() {
  return (
    <div className="App">
      <Ketersediaan kondisi="online" />
      {/* <ReservasiOngoing /> */}
    </div>
  );
}

export default App;