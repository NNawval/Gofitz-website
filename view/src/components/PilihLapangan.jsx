import React from "react";
import "../styles/pilihLapangan.css";
import DeskripsiLapangan from "./DeskripsiLapangan";
import PilihWaktu from "./PilihWaktu";

function PilihLapangan(prompt) {
    

    return (
        <div className="container-fluid p-0">
            <DeskripsiLapangan image={prompt.lapangan.image} nomorLapangan={prompt.lapangan.id} jenisLapangan={prompt.lapangan.jenisLapangan} jumlahBola={prompt.lapangan.jumlahBola} luas={prompt.lapangan.luas} harga={prompt.lapangan.harga} />
            <PilihWaktu nomorLapangan={prompt.lapangan.id} />
        </div>
    );
}

export default PilihLapangan;