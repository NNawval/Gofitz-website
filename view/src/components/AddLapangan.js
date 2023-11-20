import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddLapangan = () => {
  const [tipe, setTipe] = useState("");
  const [bola, setBola] = useState("");
  const [size, setSize] = useState("");
  const [weekend, setWeekend] = useState("");
  const [weekday, setWeekday] = useState("");



  const saveLapangan= async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/Lapangan", {
        tipe,
        bola,
        size,
        weekend,
        weekday,
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveLapangan}>
          <div className="field">
            <label className="label">Tipe Lapangan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
                placeholder="Tipe Lapangan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jumlah Bola</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={bola}
                onChange={(e) => setBola(e.target.value)}
                placeholder="Jumlah bola"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Size Lapangan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Size Lapangan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga Weekend</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={weekend}
                onChange={(e) => setWeekend(e.target.value)}
                placeholder="Harga Weekend"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga Weekday</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={weekday}
                onChange={(e) => setWeekday(e.target.value)}
                placeholder="Jumlah bola"
              />
            </div>
          </div>
          <div className="field">
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