import React from "react";
import "../styles/calendar.css";
import CalendarSatuan from "./CalendarSatuan";

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function setTanggal(tanggal, bulan) {
    const tahun = new Date().getFullYear();
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
    const tahun = new Date().getFullYear();
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
    setTanggal(tanggal1, new Date().getMonth());
    setTanggal2(tanggal2, (new Date().getMonth() + 1))
    //new Date(new Date().getFullYear(), (new Date().getMonth() + 1)).getFullYear()
    return (
        <div className="container">
            <h3 className="text-start mb-4">Pilih tanggal reservasi</h3>
            <div className="row justify-content-center gap-4">
                <CalendarSatuan month={new Date().getMonth()} year={new Date().getFullYear()} tanggal={tanggal1} ubahTanggal={props.ubahTanggal} />
                <CalendarSatuan month={new Date(new Date().getFullYear(), (new Date().getMonth() + 1)).getMonth()} year={new Date(new Date().getFullYear(), (new Date().getMonth() + 1)).getFullYear()} tanggal={tanggal2} ubahTanggal={props.ubahTanggal} />
            </div>
        </div>
    );
}

export default Calendar;