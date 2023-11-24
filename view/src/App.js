import React from 'react';
import './App.css';
// import Ketersediaan from './pages/Ketersediaan';
import Reservasi from './pages/Reservasi';

function App() {
  return (
    <div className="App">
      {/* <Ketersediaan /> */}
      <Reservasi lapangan={1} online={true} />
    </div>
  );
}

export default App;