import React from 'react';
import './App.css';
import Ketersediaan from './pages/Ketersediaan';
// import Calendar from './components/Calendar';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="addLapangan" element={<AddLapangan/>}/>
        <Route path="ListLapangan" element={<ListLapangan/>}/>
        <Route path="ListLapangan/EditLapangan/:id" element={<EditLapangan/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
        <Route path="DashboardOwner" element={<DashboardOwner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;