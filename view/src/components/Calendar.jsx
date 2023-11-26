import React from "react";
import "../styles/calendar.css";
import CalendarSatuan from "./CalendarSatuan";

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function setTanggal(tanggal, bulan) {
    const tahun = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getFullYear();
    const jmlhHari = daysInMonth((bulan + 1), tahun);
    const hari = new Date(tahun, bulan, 1).getDay();
    for (let i = 0; i < hari; i++) {
        tanggal.push([-7+i, false]);
    }
    for (let i = 1; i <= jmlhHari; i++) {
        if (i > (new Date().getDate())) {
            tanggal.push([i, true]);
        } else {
            tanggal.push([i, false]);
        }
        
    }
}

function setTanggal2(tanggal, bulan) {
    const tahun = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getFullYear();
    const jmlhHari = daysInMonth((bulan + 1), tahun);
    const hari = new Date(tahun, bulan, 1).getDay();
    for (let i = 0; i < hari; i++) {
        tanggal.push([-7+i, false]);
    }
    for (let i = 1; i <= jmlhHari; i++) {
        if (i <= (30 - (daysInMonth((bulan), tahun) - new Date().getDate()))) {
            tanggal.push([i, true]);
        } else {
            tanggal.push([i, false]);
        }
        
    }
}

function Calendar(props) {
    const tanggal1 = [];
    const tanggal2 = [];
    setTanggal(tanggal1, new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth());
    setTanggal2(tanggal2, (new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth() + 1))

    return (
        <>
            <h3 className="text-start m-0">Pilih tanggal reservasi</h3>
            <div className="container">
                <div className="row justify-content-center gap-4">
                    <CalendarSatuan month={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth()} year={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getFullYear()} tanggal={tanggal1} ubahTanggal={props.ubahTanggal} ubahHarga={props.ubahHarga} ubahHargaTotal={props.ubahHargaTotal} reservasi={props.reservasi} jam={props.jam} lapangan={props.lapangan} ketersediaan={props.ketersediaan} waktuKosong={props.waktuKosong} getKetersediaan={props.getKetersediaan} setWaktuKosong={props.setWaktuKosong} ubahWaktuKosong={props.ubahWaktuKosong} isReserved={props.isReserved} time={props.time} setCanPesan={props.setCanPesan} checkKetersediaan={props.checkKetersediaan} />
                    <CalendarSatuan month={new Date(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getFullYear(), (new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth() + 1)).getMonth()} year={new Date(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getFullYear(), (new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth() + 1)).getFullYear()} tanggal={tanggal2} ubahTanggal={props.ubahTanggal} ubahHarga={props.ubahHarga} ubahHargaTotal={props.ubahHargaTotal} reservasi={props.reservasi} jam={props.jam} lapangan={props.lapangan} ketersediaan={props.ketersediaan} waktuKosong={props.waktuKosong} getKetersediaan={props.getKetersediaan} setWaktuKosong={props.setWaktuKosong} ubahWaktuKosong={props.ubahWaktuKosong} isReserved={props.isReserved} time={props.time} setCanPesan={props.setCanPesan} checkKetersediaan={props.checkKetersediaan} />
                </div>
            </div>
            <hr className="m-0" />
        </>
    );
}

export default Calendar;