import React from "react";
import PilihLapangan from "../components/PilihLapangan";
import Navbar from "../components/Navbar";
import KonfirmasiReservasi from "../components/KonfirmasiReservasi";
import lapanganPoliuretan from "../assets/lapangan-poliuretan.jpg";
import Footer from "../components/Footer";
import lapanganRumput from "../assets/lapangan-rumput.jpg";
import lapanganSemen from "../assets/lapangan-semen.jpg";

const lapangan=[{"id": "1", "jenisLapangan": "Lantai Atletik Poliuretan", "jumlahBola": 3, "luas":"42x25", "harga":{"weekday": 200000, "weekend": 250000}, "image":lapanganPoliuretan},
{"id": "2", "jenisLapangan": "Lantai Rumput Sintetis", "jumlahBola": 4, "luas":"38x20", "harga":{"weekday": 150000, "weekend": 175000}, "image":lapanganRumput},
{"id": "3", "jenisLapangan": "Lantai Semen Cat", "jumlahBola": 3, "luas":"38x20", "harga":{"weekday": 100000, "weekend": 125000}, "image":lapanganSemen}];

function Ketersediaan() {
  console.log(lapangan[0].harga.weekday);
  return (
    <div>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-lg-8 col-12 d-flex flex-column gap-4 mt-4">
            <PilihLapangan lapangan={lapangan[0]} />
            <PilihLapangan lapangan={lapangan[1]} />
            <PilihLapangan lapangan={lapangan[2]} />
          </div>
          <div className="col-4">
            <KonfirmasiReservasi tanggal="19/12/2021" mulai="08.00" selesai="09.00" lapangan={lapangan} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ketersediaan;