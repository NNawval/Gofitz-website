import React from "react";

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
            <div className="container sticky-top pt-4 d-none d-lg-block">
                <div className="card shadow">
                    <div className="card-body m-2">
                        <h1 className="card-title pricing-card-title fs-4 text-start mt-2 mb-4">Rp200,000<small className="fs-6 text-body-secondary fw-light"> / jam</small></h1>
                        <div className="border rounded text-start">
                            <div className="row m-0">
                                <div className="col-12 border-bottom pb-2 pt-1">
                                    <b className="size-title">TANGGAL</b>
                                    <p className="m-0">12/12/2023</p>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-6 border-end pb-2 pt-1">
                                    <b className="size-title">MULAI</b>
                                    <p className="m-0">08.00</p>
                                </div>
                                <div className="col-6 pb-2 pt-1">
                                    <b className="size-title">SELESAI</b>
                                    <p className="m-0">10.00</p>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-12 border-top pb-2 pt-1">
                                    <b className="size-title">LAPANGAN</b>
                                    <p className="m-0">Lapangan 1</p>
                                    {AddFoto(prompt.lapangan)}
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success rounded w-100 align-self-center my-3 p-2" type="button">
                            Pesan
                        </button>
                        <p className="text-start"><b>Total :</b></p>
                        <hr />
                        <div className="d-flex justify-content-between flex-wrap">
                            <p className="m-0"><b>Rp200,000 x 2 jam</b></p>
                            <p className="m-0">= <b><u>Rp400,000</u></b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex d-lg-none px-4 py-2 justify-content-between align-items-center fixed-bottom border-top bg-white">
                <div className="text-start">
                    <strong>Rp400,000<small className="fs-6 text-body-secondary fw-light"> / 2 jam</small></strong>
                    <p className="m-0"><u>12/12/2023</u> : <u>08.00-10.00</u></p>
                </div>
                <button className="btn btn-success rounded w-25 align-self-center my-3 p-2" type="button">
                    Pesan
                </button>
            </div>
        </>
    );
}
