import React from 'react';
import './App.css';
import Reservasi from './pages/Reservasi'

function App() {
  return (
    <div className="App">
      <Reservasi online={true} lapangan={"lapangan-rumput"}/>
    </div>
  );
}

export default App;
