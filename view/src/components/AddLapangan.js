import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Navbar from "../components/Navbar";

const supabaseUrl = 'https://agoejuqrexiwsbmjmrfa.supabase.co'

const supabase = createClient(supabaseUrl, 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnb2VqdXFyZXhpd3NibWptcmZhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDU1NjczMSwiZXhwIjoyMDE2MTMyNzMxfQ.nHncXAmHxEfi1yUi17eZxt8BTlS62arf64fUV9sM4K0")

const AddLapangan = () => {
  const  [lapangan, setLapangan]= useState([])
  const [lapangan1, setLapangan1]=useState({
    tipe:'',bola:'',size:'',weekend:'',weekday:''
  })

  useEffect(() => {
    fetchLapangan()
  }, [])

 

  async function fetchLapangan(){
    const {data} = await supabase
      .from('lapangan')
      .select('*')
      setLapangan(data)
      console.log(data) 
  }

 
  function handleChange(event){
    
    setLapangan1(prevFormData=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function createLapangan(){
    await supabase
    .from('lapangan')
    .insert({ typeLapangan: lapangan1.tipe, countBola: lapangan1.bola, sizeLapangan: lapangan1.size , priceLapanganWeekend : lapangan1.weekend, priceLapanganWeekday : lapangan1.weekday })

  await fetchLapangan()    


  }


  return (
    <div className="containter-fluid p-0">
      <Navbar/>
      <h1 className="text-center mt-5">EDIT LAPANGAN</h1>
      <div className="container w-75 mt-5">
        <form onSubmit={createLapangan}>
          <div className="">
            <label className="label">Tipe Lapangan</label>
            <div className="control">
              <input
                type="text"
                
                name="tipe"
                onChange={handleChange}
                placeholder="Tipe Lapangan"
              />
            </div>
          </div>
          <div className="">
            <label className="label">Jumlah Bola</label>
            <div className="control">
              <input
                type="text"
                
                name = 'bola'
                onChange={handleChange}
                placeholder="Jumlah bola"
              />
            </div>
          </div>
          <div className="">
            <label className="label">Size Lapangan</label>
            <div className="control">
              <input
                type="text"
                
                name="size"
                onChange={handleChange}
                placeholder="Size Lapangan"
              />
            </div>
          </div>
          <div className="">
            <label className="label">Harga Weekend</label>
            <div className="control">
              <input
                type="text"
                
                name="weekend"
                onChange={handleChange}
                placeholder="Harga Weekend"
              />
            </div>
          </div>
          <div className="">
            <label className="label">Harga Weekday</label>
            <div className="control">
              <input
                type="text"
                
                name="weekday"
                onChange={handleChange}
                placeholder="Jumlah bola"
              />
            </div>
          </div>
          <div className="">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLapangan;