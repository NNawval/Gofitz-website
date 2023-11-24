import React from "react";
import { useRef, useState} from "react";

function Form(props){

    function File(props){
        
        if (props === true){
            return (
                <div className="col-12">
                    <label htmlFor="formFile" className="form-label">Upload bukti pembayaran</label>
                    <input  type="file" className="d-block form-control" accept = "image/png, img/jpeg" placeholder="" />
                </div>
              );
        }
        else{
            return(
                <></>
            );
        }
    }

    const []

    return(
        <div className="container-fluid px-5 px-lg-2 mt-4 mx-0 text-start">
            <hr className="d-none d-lg-block" />
            <h4 className="mb-3">Pesananmu</h4>
            <div className="d-flex justify-content-between">
                <p><b>Tanggal</b></p>
                <p>Selasa, 21 November 2023</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-0"><b>Jam</b></p>
                <p className="mb-0">08:00-10:00</p>
            </div>
            <hr/>
            <h4 className="mb-3">Masukkan data diri</h4>
            <form>
                <div className="form-floating mb-3" >
                    <input type="text" className="form-control rounded-3" id="nama" placeholder="Nama" />
                    <label htmlFor="nama" >Nama</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control rounded-3" id="nomor-telepon" placeholder="Nomor telepon" />
                    <label htmlFor="nomor-telepon">Nomor telepon</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control rounded-3" id="email-reservasi" placeholder="Email" />
                    <label htmlFor="email-reservasi">Email</label>
                </div>
                {File(props.online)}
                <small className="text-body-secondary">By clicking Pesan, you agree to the terms of use.</small>
                <button className="w-100 mt-3 btn btn-lg rounded-3 btn-success" type="submit">Pesan</button>
            </form>
        </div>
    );
}

export default Form;