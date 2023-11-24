import React from "react";
import "../styles/tanggal.css";

function mouseOver(event) {
    event.target.classList.add("mouse-over");
}

function mouseOut(event) {
    event.target.classList.remove("mouse-over");
}

function Tanggal(props) {
    function setStyle(status) {
        let style = "";
        if (status[0] <= 0) {
            style = "btn-tanggal invisible";
        } else {
            if (status[1]) {
                if (status[0] === (new Date().getDate() + 1) && props.month === new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth()) {
                    style = "btn-tanggal enabled mouse-click";
                } else {
                    style = "btn-tanggal enabled";
                }
            } else {
                style = "btn-tanggal tgl-disabled"
            }
        }
        return style;
    }

    function gantiTanggal(event) {
        props.ubahTanggal(new Date(props.year, props.month, event.target.innerText));
        if (props.reservasi !== "Pilih lapangan") {
            if (((new Date(props.year, props.month, event.target.innerText)).getDay() === 0) || ((new Date(props.year, props.month, event.target.innerText)).getDay() === 6)) {
                props.ubahHarga(props.lapangan[parseInt((props.reservasi).split(" ")[1])-1].priceLapanganWeekend);
                props.ubahHargaTotal(props.lapangan[parseInt((props.reservasi).split(" ")[1])-1].priceLapanganWeekend * (props.jam));
            } else {
                props.ubahHarga(props.lapangan[parseInt((props.reservasi).split(" ")[1])-1].priceLapanganWeekday);
                props.ubahHargaTotal(props.lapangan[parseInt((props.reservasi).split(" ")[1])-1].priceLapanganWeekday * (props.jam));
            }
        }
        
        let button = document.getElementsByClassName("enabled");
        for (let i = 0; i < button.length; i++) {
            button[i].classList.remove("mouse-click");
        }
        event.target.classList.add("mouse-click");
    }
    return (
        <button onClick={gantiTanggal} onMouseOver={mouseOver} onMouseOut={mouseOut} className={setStyle(props.status)} data-bs-toggle="button">{props.status[0]}</button>
    )
}

export default Tanggal;