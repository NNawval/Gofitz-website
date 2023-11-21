import React from "react";
import lapanganPoliuretan from "../assets/lapangan-poliuretan.jpg";

export default function DetailPesanan(prompt) {
    function AddFoto(prompt) {
        const src = `../assets/${prompt}.jpg`;
        console.log(src);
        return (
            <div>
                <img src={src} alt=""/>
            </div>
        );
    }
    return (
        <>
            <div className="container-fluid container-lg sticky-top pt-4">
                <div className="border p-3" style={{borderRadius:"15px"}}>
                    <div className="d-flex gap-2">
                        <img src={lapanganPoliuretan} alt="lapangan" style={{width:"120px", height:"100px", objectFit:"cover", border:"1px solid transparent", borderRadius:"10px"}} />
                        <div className="d-flex flex-column text-start justify-content-between">
                            <div>
                                <p className="m-0">Lapangan 1</p>
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
