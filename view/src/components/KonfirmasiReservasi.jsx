import React from "react";

function KonfirmasiReservasi() {
    return (
            <div className="container sticky-top pt-4 d-none d-lg-block">
                <div className="card shadow">
                    <div className="card-body m-2">
                        <h1 className="card-title pricing-card-title fs-4 text-start mt-2 mb-4">Rp50,000<small className="fs-6 text-body-secondary fw-light"> / jam</small></h1>
                        <div className="border rounded text-start">
                            <div className="row m-0">
                                <div className="col-12 border-bottom py-2">
                                    <b>TANGGAL</b>
                                    <p className="m-0">12/12/2023</p>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-6 border-end py-2">
                                    <b>MULAI</b>
                                    <p className="m-0">08.00</p>
                                </div>
                                <div className="col-6 py-2">
                                    <b>SELESAI</b>
                                    <p className="m-0">09.00</p>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-12 border-top py-2">
                                    <b>LAPANGAN</b>
                                    <p className="m-0">Lapangan 1</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success rounded w-100 align-self-center my-3 p-2" type="button">
                            Pesan
                        </button>
                        <p className="text-start"><b>Total :</b></p>
                        <hr />
                        <div className="d-flex justify-content-between gap-2">
                            <p className="m-0"><b>Rp50,000 x 2 jam</b></p>
                            <p className="m-0"><b><u>Rp100,000</u></b></p>
                        </div>
                    </div>
                </div>
            {/* <div className="container-fluid fixed-bottom ">
                <hr />

            </div> */}
        </div>
    );
}

export default KonfirmasiReservasi;