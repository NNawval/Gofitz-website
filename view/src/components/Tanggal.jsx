import React from "react";
import "../styles/tanggal.css";

function mouseOver(event) {
    event.target.className = "btn-tanggal mouse-over";
}

function mouseOut(event) {
    event.target.className = "btn-tanggal";
}

function setStyle(status) {
    let style = "";
    if (status[0] <= 0) {
        style = "btn-tanggal invisible";
    } else {
        if (status[1]) {
            style = "btn-tanggal";
        } else {
            style = "btn-tanggal tgl-disabled"
        }
    }
    return style;
}

function Tanggal(props) {
    function gantiTanggal(event) {
        props.ubahTanggal(new Date(props.year, props.month, event.target.innerText));
    }
    return (
        <button onClick={gantiTanggal} onMouseOver={mouseOver} onMouseOut={mouseOut} className={setStyle(props.status)} data-bs-toggle="button">{props.status[0]}</button>
    )
}

export default Tanggal;