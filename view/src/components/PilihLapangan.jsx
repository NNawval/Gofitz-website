import React from "react";
import "../styles/pilihLapangan.css";
import DeskripsiLapangan from "./DeskripsiLapangan";
import PilihWaktu from "./PilihWaktu";

function PilihLapangan(props) {
    return (
        <div className="container-fluid p-0">
            <DeskripsiLapangan image={props.lapangan.imageSrc} nomorLapangan={props.lapangan.id} jenisLapangan={props.lapangan.namaLapangan} jumlahBola={props.lapangan.countBola} luas={props.lapangan.sizeLapangan} hargaWeekday={props.lapangan.priceLapanganWeekday} hargaWeekend={props.lapangan.priceLapanganWeekend} />
            <PilihWaktu lapangan={props.lapangan.id} listReservasi={props.reservasi} />
        </div>
    );
}

export default PilihLapangan;