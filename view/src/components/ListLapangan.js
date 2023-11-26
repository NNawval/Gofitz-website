
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "@supabase/supabase-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faMoneyBillWave, faGear, faTrash, faRulerCombined, faPlus } from "@fortawesome/free-solid-svg-icons";
const supabaseUrl = "https://rrdwyabynnlseyxhwqqx.supabase.co"


const supabase = createClient(supabaseUrl, 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZHd5YWJ5bm5sc2V5eGh3cXF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDEyMzY4NSwiZXhwIjoyMDE1Njk5Njg1fQ.0Zr2CpFSv0oKVj_0YE5OuNsIkgykZEJdH6I7aVhVJgA")


function ListLapangan() {
    const [lapangan, setLapangan] = useState([]);

    useEffect(() => {
        fetchLapangan()
      }, [])
    
     
    const navigate = useNavigate();
      async function fetchLapangan(){
        const {data} = await supabase
          .from('lapangan')
          .select()
          setLapangan(data)
  
      }
      function toRupiah(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
     

    return (
      <>
      <Navbar />
      <div className="">
      <h1 className="text-center mt-5">DATA LAPANGAN</h1>
      <div className="container w-75">
        <div></div>
        <div className="mt-5 mb-3">
        <button onClick={() => navigate('/AddLapangan')} type="button" class="btn btn-success btn-lg"> <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} /> Tambah Lapangan</button>
        </div>
        <div className="row">
            <div className="col-lg-10 col-12 d-flex flex-column gap-4 mt-4">
              {lapangan.map((x) => 
              <div className="row mb-0">
              <div className="col-md-12">
                  <div className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                      <div className="col-auto d-none d-xl-block">
                      <img src={x.imageSrc} alt="lapangan" className="bd-placeholder-img image" />
                      </div>
                      <div className="col p-4 d-flex flex-column position-static text-start">
                          <strong className="d-inline-block mb-2 text-primary-emphasis"><span className="badge bg-success">Lapangan {x.nomorLapangan}</span></strong>
                          <div className="row">
                          <div className="col">
                          <h3 className="mb-0">{x.namaLapangan}</h3>
                          </div>
                          <div className="col-4 text-end"> 
                          <button onClick={()=> navigate(`EditLapangan/${x.id}`)}   type="button" class="btn btn-outline-light" >
                            
                          <FontAwesomeIcon icon={faGear} style={{color: "#6a6d71",}} />
                          </button>
                          </div>
                          <div className="col-1 text-end">
                          <button type="button" class="btn btn-outline-light">
                          <FontAwesomeIcon icon={faTrash} style={{color: "#d31717",}} />
                          </button> 

                          </div>
                          </div>
                          <div className="d-flex justify-content-between w-100">
                              <div className="mb-1 text-body-secondary">{<FontAwesomeIcon icon={faFutbol} />} {x.countBola} <small className="text-body-secondary fw-light"> bola</small></div>
                
                          </div>
                          <p className="card-text mb-auto">{<FontAwesomeIcon icon={faMoneyBillWave} />}<b> Weekday: {"Rp" + x.priceLapanganWeekend}</b><small className="text-body-secondary fw-light"> / jam</small></p>
                          <p className="card-text mb-auto">{<FontAwesomeIcon icon={faMoneyBillWave} />}<b> Weekend: {"Rp" + x.priceLapanganWeekday}</b><small className="text-body-secondary fw-light"> / jam</small></p>
                      </div>
                  </div>
              </div>
          </div>
              )}
            </div>
            </div>
      </div>
</div>
    </>

    );
}
export default ListLapangan;