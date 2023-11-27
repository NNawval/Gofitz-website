const express = require("express");
const bodyParser = require("body-parser");
const database = require("../view/src/models/database")

const app = express();

// let port = process.env.PORT;
// if(port == null || port == ""){
//     port == 8000;
// }

let port = 8000;


app.get("/",async function(req,res){
    // let date = new Date();
    // let dateTomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
   
    // let input = {
    //     "date": date,
    //     "dateTomorrow": dateTomorrow,
    //     "idLapangan":1,
    // }

    // let data = await database.tes();
    let input ={
        "namapemesan": "awikwok"
    }
    let data = await database.getAllReservasi();
    // // let data = await database.imageLapangan("poliuretan");
    // console.log(data);
    // console.log(data);
    // console.log(data[0].nyoba);
    // console.log(typeof data[0].nyoba );
    // console.log(data[0].scheduleBookingStart);
    // console.log(typeof data[0].scheduleBookingStart);

    res.send(data);
});

app.listen(port,function(){
    console.log("Server has started at port " + port);
});




