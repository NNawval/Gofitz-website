import React from "react";
import "../styles/konfirmasiReservasi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown ,faChevronUp } from "@fortawesome/free-solid-svg-icons";
import DropdownItem from "./DropdownItem";

// database
const lapangan=[{"id": "1", "harga":{"weekday": 200000, "weekend": 250000}},
{"id": "2", "harga":{"weekday": 150000, "weekend": 175000}},
{"id": "3","harga":{"weekday": 100000, "weekend": 125000}}];

function toRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toTime(time) {
    let timeString = ""
    if (time < 10) {
        timeString += "0";
    }
    timeString += time.toString();
    return timeString;
}

function KonfirmasiReservasi(props) {
    const [reservasi, setReservasi] = React.useState("Pilih lapangan");
    const [harga, setHarga] = React.useState(" -");
    const [jam, setJam] = React.useState(1);
    const [hargaTotal, setHargaTotal] = React.useState("-");
    const [style, setStyle] = React.useState("mt-3 d-none");
    const [time, setTime] = React.useState({"mulai" : 7, "selesai" : 8});

    function incrementStart() {
        if (time.mulai < 20) {
            if (time.selesai -time.mulai === 1) {
                setTime({"mulai": time.mulai + 1, "selesai": time.selesai + 1});
            } else {
                setTime({"mulai": time.mulai + 1, "selesai": time.selesai});
                setJam(time.selesai - time.mulai - 1);
                setHargaTotal(harga * (time.selesai - time.mulai - 1));
            }
        }
    }

    function incrementEnd() {
        if (time.selesai < 21 && (time.selesai - time.mulai) < 6) {
            setTime({"mulai": time.mulai, "selesai": time.selesai + 1});
            setJam(time.selesai - time.mulai + 1);
            setHargaTotal(harga * (time.selesai - time.mulai + 1));
        }
    }

    function decrementStart() {
        if (time.mulai > 7 && (time.selesai - time.mulai) < 6) {
            setTime({"mulai": time.mulai - 1, "selesai": time.selesai});
            setJam(time.selesai - time.mulai + 1);
            setHargaTotal(harga * (time.selesai - time.mulai + 1));
        }
    }

    function decrementEnd() {
        if (time.selesai > 8) {
            if (time.selesai - time.mulai === 1) {
                setTime({"mulai": time.mulai - 1, "selesai": time.selesai - 1});
            } else {
                setTime({"mulai": time.mulai, "selesai": time.selesai - 1});
                setJam(time.selesai - time.mulai - 1);
                setHargaTotal(harga * (time.selesai - time.mulai - 1));
            }
        }
    }

    function gantiLapangan(event) {
        setReservasi(event.target.innerText);
        if ((props.pilihTanggal.getDay() === 0) || (props.pilihTanggal.getDay() === 6)) {
            setHarga(lapangan[parseInt(event.target.innerText.split(" ")[1])-1].harga.weekend);
            setHargaTotal(lapangan[parseInt(event.target.innerText.split(" ")[1])-1].harga.weekend * (time.selesai-time.mulai));
        } else {
            setHarga(lapangan[parseInt(event.target.innerText.split(" ")[1])-1].harga.weekday);
            setHargaTotal(lapangan[parseInt(event.target.innerText.split(" ")[1])-1].harga.weekday * (time.selesai-time.mulai));
        }
        setStyle("mt-3 d-block");
    }

    return (
        <>
            <div className="container sticky-top pt-4 d-none d-lg-block">
                <div className="card shadow">
                    <div className="card-body m-2">
                        <h1 className="card-title pricing-card-title fs-4 text-start mt-2 mb-4">Rp{toRupiah(harga)}<small className="fs-6 text-body-secondary fw-light"> / jam</small></h1>
                        <p className="mb-2 text-start">{props.pilihTanggal.toLocaleDateString('id', {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'})}</p>
                        <div className="border rounded text-start">
                            <div className="row m-0">
                                <button className="col-12 border-bottom style-dropdown text-start btn" type="button" data-bs-toggle="dropdown" >
                                    <div className="m-0 p-0 d-flex justify-content-between align-items-center">
                                        <div className="m-0 p-0">
                                            <b className="size-title">LAPANGAN</b>
                                             <p className="m-0">{reservasi}</p>
                                        </div>
                                        <FontAwesomeIcon className="icon-size" icon={faChevronDown} />
                                    </div>
                                    
                                </button>
                                <ul className="dropdown-menu">
                                    {lapangan.map(x => <DropdownItem key={x.id} id={x.id} methodClick={gantiLapangan} />)}
                                </ul>
                            </div>
                            <div className="row m-0">
                                <div className="col-6 border-end pb-2 pt-1 d-flex justify-content-between align-items-center">
                                    <div>
                                        <b className="size-title">MULAI</b>
                                        <p className="m-0">{toTime(time.mulai)} : 00</p>
                                    </div>
                                    <div className="row">
                                        <button onClick={incrementStart} className="p-0 me-2 remove-button"><FontAwesomeIcon className="icon-size" icon={faChevronUp} /></button>
                                        <button onClick={decrementStart} className="p-0 me-2 remove-button"><FontAwesomeIcon className="icon-size" icon={faChevronDown} /></button>
                                    </div>
                                    
                                </div>
                                <div className="col-6 pb-2 pt-1 d-flex justify-content-between align-items-center">
                                    <div>
                                        <b className="size-title">SELESAI</b>
                                        <p className="m-0">{toTime(time.selesai)} : 00</p>
                                    </div>
                                    <div className="row">
                                        <button onClick={incrementEnd} className="col-12 p-0 me-2 remove-button"><FontAwesomeIcon className="icon-size" icon={faChevronUp} /></button>
                                        <button onClick={decrementEnd} className="col-12 p-0 me-2 remove-button"><FontAwesomeIcon className="icon-size" icon={faChevronDown} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success rounded w-100 align-self-center mt-3 p-2" type="button">
                            Pesan
                        </button>
                        <div className={style}>
                            <p className="text-start"><b>Total :</b></p>
                            <hr />
                            <div className="d-flex justify-content-between flex-wrap">
                                <p className="m-0"><b>Rp{toRupiah(harga)} x {jam} jam</b></p>
                                <p className="m-0">= <b><u>Rp{toRupiah(hargaTotal)}</u></b></p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex d-lg-none px-4 py-2 justify-content-between align-items-center fixed-bottom border-top bg-white">
                <div className="text-start">
                    <strong>Rp{toRupiah(hargaTotal)}<small className="fs-6 text-body-secondary fw-light"> / {jam} jam</small></strong>
                    <p className="m-0"><u>{props.pilihTanggal.toLocaleDateString('id', {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'})}</u> : <u>08.00-10.00</u></p>
                </div>
                <button className="btn btn-success rounded w-25 align-self-center my-3 p-2" type="button">
                    Pesan
                </button>
            </div>
        </>
    );
}

export default KonfirmasiReservasi;