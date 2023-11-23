import React from "react";
import DetailPesanan from "../components/DetailPesanan";
import Form from "../components/FormReservasi";

function Reservasi(prompt) {
  return (
    <div>
      <div className="container w-75 ">
        <div className="row justify-content-center gap-5">
          <div className="col-lg-5 col-12 ">
            <Form online={prompt.online}/>
          </div>
          <div className="col-5">
            <DetailPesanan lapangan={prompt.lapangan}/>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default Reservasi;