import React from "react";
import PilihLapangan from "../components/PilihLapangan";
import Navbar from "../components/Navbar";
import KonfirmasiReservasi from "../components/KonfirmasiReservasi";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import database from "../models/database";

// ini udh id lapangan yg sama tanggal yg sama
const reservasii = [{"codeBooking": "x", "bookingStart": new Date('March 13, 08 07:00'), "bookingEnd": new Date('March 13, 08 10:00'), "idLapangan": "x"}];

function Ketersediaan() {
  const [lapangan, setLapangan] = React.useState([]);
  const [tanggal, setTanggal] = React.useState(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
  const [harga, setHarga] = React.useState(" -");
  const [hargaTotal, setHargaTotal] = React.useState("-");
  const [reservasi, setReservasi] = React.useState("Pilih lapangan");
  const [jam, setJam] = React.useState(1);
  const [ketersediaan, setKetersediaan] = React.useState([]);

  React.useEffect(() => {    
    getLapangan();
  }, []);

  async function getLapangan(){
    let data = await database.getAllLapangan();
    setLapangan(data);
  }

  async function getAllKetersediaan(lapangan){
    let output = [];
    for (let i = 1; i <= lapangan.length; i++) {
      output.push(await database.getKetersediaan({idLapangan:i, date: new Date().getTime(), dateTomorrow:new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}));
    }
    // let data = await database.getKetersediaan({idLapangan:1, date: new Date().getTime(), dateTomorrow:new Date(new Date().getTime() + 24 * 60 * 60 * 1000)});
    
    setKetersediaan(output);
  }  

  return (
    <div>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-lg-8 col-12 d-flex flex-column gap-4 mt-4">
            <h3 className="text-start m-0">Pilih tanggal reservasi</h3>
            <Calendar ubahTanggal={setTanggal} ubahHarga={setHarga} ubahHargaTotal={setHargaTotal} reservasi={reservasi} jam={jam} lapangan={lapangan} />
            <hr className="m-0" />
            <h3 className="text-start m-0">Cek ketersediaan lapangan</h3>
            {lapangan.map(x => <PilihLapangan key={x.id} lapangan={x} reservasi={reservasii} />)}
          </div>
          <div className="col-4">
            <KonfirmasiReservasi lapangan={lapangan} pilihTanggal={tanggal} harga={harga} ubahHarga={setHarga} hargaTotal={hargaTotal} ubahHargaTotal={setHargaTotal} reservasi={reservasi} ubahReservasi={setReservasi} jam={jam} ubahJam={setJam} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ketersediaan;