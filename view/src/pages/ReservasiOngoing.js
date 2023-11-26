import React, { useEffect } from "react";
import ListReservasi from "../components/ListReservasi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/CalendarUbah";
import database from "../models/database"


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
    let lapanganAwal = "Lapangan";     
    const [nama, setNama] = React.useState({nama:""});
    const [tanggal, setTanggal] = React.useState("Pilih Tanggal Reservasi");
    const [lapangan, setLapangan] = React.useState(lapanganAwal);
    const [listLapangan , setListLapangan ] = React.useState([]);
    const [ListReservasiDb, setListReservasi] = React.useState([]);

    let list = ListReservasiDb;
    // const [input, setInput] = React.useState({
    //     "nama": "",
    //     "tanggal":"Pilih Tanggal Reservasi" ,
    //     "lapangan": "Lapangan"
    // });


    useEffect (()=>{
        getDataListLapangan();
        getDataListReservasiAwal();
    }, []);


    async function getDataListLapangan(){
        let data = await database.getNomorLapangan();
        setListLapangan(data);
    }    

    async function getDataListReservasiAwal(){
        let data = await database.getAllReservasi();
        setListReservasi(data);
    }


    function clickLapangan(event) {
        setLapangan(event.target.innerHTML);
        // setLapangan(prevFormData=>{
        //     return{
        //       ...prevFormData,
        //       [event.target.name]:event.target.value
        //     }
        //   });
        // getDataListReservasi(input);
        console.log(lapangan);
    }

    function ubahNama(event) {
        // setNama(event.target.innerHTML);
        setNama(prevFormData=>{
        return{
          ...prevFormData,
          [event.target.name]:event.target.value
        }
        });
        // getDataListReservasi(input);
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
                                <input onChange={ubahNama}  className="border-0 d-block w-100" type="word" name="nama" placeholder="Nama" style={{outline:"none"}} />                        
                            </div>
                            <div className="col-4">
                                <button className="px-3 style-dropdown text-start btn w-100 border rounded" type="button" data-bs-toggle="dropdown" >
                                    <div className="m-0 p-0 d-flex justify-content-between align-items-center">
                                        <p className="m-0">{lapangan}</p>
                                        <FontAwesomeIcon className="icon-size" icon={faChevronDown} />
                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {/* {listLapangan.length === 0 ? <li></li> : listLapangan.map((x)=>
                                            <li><button onClick={clickLapangan} className="remove-button dropdown-item">Lapangan {x.nomorLapangan}</button></li>
                                    )} */}
                                    {listLapangan.map((x)=>
                                            <li><button onClick={clickLapangan} className="remove-button dropdown-item">Lapangan {x.nomorLapangan}</button></li>
                                    )}
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
                        {/* {ListReservasiDb.data.length === 0 ? <></> : ListReservasiDb.data.map((x)=> <ListReservasi imageSrc={x.imageSrc} lapangan= {x.lapanganId} harga = {x.totalHarga} nama ={x.namaPemesan} namaLapangan={x.namaLapangan} scheduleBookingStart={x.scheduleBookingStart} scheduleBookingEnd={x.scheduleBookingEnd}/> )} */}
                        {ListReservasiDb
                        .filter((x)=>{
                            return (nama.nama === "" || nama.nama === " ") ? x : x.namaPemesan.includes(nama.nama);
                        }).filter((x)=>{
                            return  lapangan === lapanganAwal ? x : ( x.nomorLapangan === parseInt(lapangan.split(" ")[1])) ;
                        }) 
                        .map((x) => 
                        <ListReservasi id={x.id} imageSrc={x.imageSrc} lapangan= {x.lapanganId} harga = {x.totalHarga} nama ={x.namaPemesan} namaLapangan={x.namaLapangan} scheduleBookingStart={x.scheduleBookingStart} scheduleBookingEnd={x.scheduleBookingEnd}/> )}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ReservasiOngoing;
