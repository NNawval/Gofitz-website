import React from "react";
import DetailPesanan from "../components/DetailPesanan";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Reservasi(props) {
  return (
    <>
        <header className="d-lg-block d-none py-3 border-bottom text-start">
            <a href="/" className="ms-5 link-body-emphasis text-decoration-none">
                <span className="badge bg-success fs-5">GOFITZ</span>
            </a>
        </header>
        <div className="container-fluid container-lg mt-3 p-0 mb-5">
            <div className="d-flex align-items-center gap-3 justify-content-between justify-content-lg-start">
                <button style={{width: "40px", height:"40px", background:"transparent", border:"none"}}><FontAwesomeIcon className="icon-size" icon={faChevronLeft} /></button>
                <h3 className="text-lg-start m-0">Ketersediaan</h3>
                <button className="invisible" style={{width: "40px", height:"40px", background:"transparent", border:"none"}}><FontAwesomeIcon className="icon-size" icon={faChevronLeft} /></button>
            </div>
            <div className="row justify-content-between mx-0 mx-lg-5">
                
                <div className="col-12 col-lg-5 order-lg-3">
                    <DetailPesanan lapangan={props.lapangan}/>
                </div>
                <div className="p-0 col-lg-6 col-12">
                    <Form online={props.online}/>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Reservasi;