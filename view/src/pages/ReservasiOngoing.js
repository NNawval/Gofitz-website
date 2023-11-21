import React from "react";
import ListReservasi from "../components/ListReservasi";
// import database from "../../../models/database";

function ReservasiOngoing(){
    // async function loopingReservasi (){
    //     let date = Date.now();
    //     // let detail = {
    //     //     "id": 1,
    //     //     "date": date
    //     // };
    //     // const data = await database.getReservasi(detail);
    //     // console.log(data);
    //     // // data.map((el) => <ListReservasi reservasi = {el} />);
    // }       
    return(
        <div className="container w-50">
            <div className="row">
                <ListReservasi />
            </div>
        </div>
    );
}

export default ReservasiOngoing;