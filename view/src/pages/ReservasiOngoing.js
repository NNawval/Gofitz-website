import React from "react";
import ListReservasi from "../components/ListReservasi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
// import database from "../../../models/database";

function ReservasiOngoing(){
    // async function loopingReservasi (){
    //     let date = Date.now();
    //     // let detail = {
    //     //     "id": 1,
    //     //     "date": date
    //     // };
    //     // const data = await database.getReservasi(detail);
    //     // console.log(data);
    //     // // data.map((el) => <ListReservasi reservasi = {el} />);
    // }       
    const [tanggal, setTanggal] = React.useState("Pilih Tanggal Reservasi");
    const [lapangan, setLapangan] = React.useState("Lapangan");

    function clickLapangan(event) {
        setLapangan(event.target.innerHTML);
    }
    return(
        <>
            <Navbar />
            <div className="container w-75" style={{minHeight:"100vh"}}>
                <div className="container border rounded my-3 p-3">
                    <div className="container mb-3">
                        <div className="row">
                            <div className="col-5 p-1 border rounded text-start d-flex align-items-center">
                                <FontAwesomeIcon className="text-secondary mx-3" icon={faMagnifyingGlass} />
                                <input className="border-0 d-block w-100" type="word" name="nama" placeholder="Nama" style={{outline:"none"}} />                        
                            </div>
                            <div className="col-4">
                                <button className="px-3 style-dropdown text-start btn w-100 border rounded" type="button" data-bs-toggle="dropdown" >
                                    <div className="m-0 p-0 d-flex justify-content-between align-items-center">
                                        <p className="m-0">{lapangan}</p>
                                        <FontAwesomeIcon className="icon-size" icon={faChevronDown} />
                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button onClick={clickLapangan} className="remove-button dropdown-item">Lapangan 1</button></li>
                                </ul>
                            </div>
                            <div className="col-3 p-0">
                                <button className="text-start style-dropdown btn w-100 border rounded px-3" type="button" data-bs-toggle="dropdown" >
                                    <div className="m-0 p-0 d-flex align-items-center">
                                        <FontAwesomeIcon className="icon-size me-3" icon={faCalendar} />
                                        <p className="m-0">{tanggal === "Pilih Tanggal Reservasi" ? tanggal : tanggal.toLocaleDateString('id', {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'})}</p>
                                    </div>
                                </button>
                                <ul className="dropdown-menu text-center p-4">
                                    <Calendar ubahTanggal={setTanggal} />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ListReservasi />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ReservasiOngoing;