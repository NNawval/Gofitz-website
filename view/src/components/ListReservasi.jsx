import React from "react";
import lapanganPoliuretan from "../assets/lapangan-poliuretan.jpg";

function ListReservasi(props){
    return(
        <div className="text-start">
            <div class="card shadow">
                <div class="card-header d-flex justify-content-between align-items-center gap-2">
                    <div className="d-flex align-items-center gap-2">
                        <p className="badge bg-success m-0">Lapangan 1</p>
                        <p className="m-0">21 November 2023</p>
                    </div>
                    <p className="m-0">08:00-09:00</p>
                </div>
                <div class="card-body">
                    <div className="d-flex gap-3">
                        <img src={lapanganPoliuretan} alt="lapangan" className="" style={{width:"150px", height:"150px", objectFit:"cover"}} /> 
                        <div className="d-flex w-100 flex-column justify-content-between">
                            <div>
                                <h5>Lapangan Poliuretan</h5>
                                <p>Pramaditya Fajri Migfar</p>
                                <p>Total: Rp200.000</p>
                            </div>
                            <button className="btn btn-outline-success w-25 align-self-end">Ubah</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListReservasi;