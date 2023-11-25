import React, { useEffect } from "react";
import lapanganPoliuretan from "../assets/lapangan-poliuretan.jpg";
import database from "../models/database"

async function getImageLapangan(props){
        let data = await database.imageLapangan(props);
        return data;
    }



export default  function DetailPesanan(props) {

    return (
        <>
            <div className="container-fluid container-lg sticky-top pt-4">
                <div className="border p-4" style={{borderRadius:"15px"}}>
                    <div className="d-flex gap-2">
                        <script>
                            let urlGambar = await getImageLapangan("poliuretan") ;
                        </script>
                        
                        <img src={lapanganPoliuretan} alt="lapangan" style={{width:"120px", height:"100px", objectFit:"cover", border:"1px solid transparent", borderRadius:"10px"}} />
                        <div className="d-flex flex-column text-start justify-content-between">
                            <div>
                                <span className="badge bg-success">Lapangan 1</span>
                                <p className="m-0">Lantai Atletik Poliuretan</p>
                            </div>
                            <p className="m-0">3 bola</p>
                        </div>  
                    </div>
                    <hr/>
                    <div className="text-start mb-3">
                        <h4>Price details</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Rp200.000</p>
                        <p className="m-0">2 jam</p>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between">
                        <p className="m-0"><b>Total</b></p>
                        <p className="m-0"><b>Rp400.000</b></p>
                    </div>
                </div>
            </div>
        </>
    );
}
