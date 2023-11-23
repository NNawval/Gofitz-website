import React from "react";
import "../styles/pilihLapangan.css";
import DeskripsiLapangan2 from "./DeskripsiLapangan2";


function PilihLapangan(props) {
    // ini udh id lapangan yg sama tanggal yg sama
    const reservasi = [{"codeBooking": "x", "bookingStart": new Date('March 13, 08 07:20'), "bookingEnd": new Date('March 13, 08 10:20'), "idLapangan": "x"}];

    return (
        <div className="container-fluid p-0">
            <DeskripsiLapangan2 image={props.lapangan.image} nomorLapangan={props.lapangan.id} jenisLapangan={props.lapangan.jenisLapangan} jumlahBola={props.lapangan.jumlahBola} luas={props.lapangan.luas} harga={props.lapangan.harga} />
        </div>
    );
}

export default PilihLapangan;