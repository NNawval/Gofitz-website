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
    let date = new Date();
    let dateTomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"T"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    dateTomorrow = dateTomorrow.getFullYear()+"-"+(dateTomorrow.getMonth()+1)+"-"+dateTomorrow.getDate()+"T"+dateTomorrow.getHours()+":"+dateTomorrow.getMinutes()+":"+dateTomorrow.getSeconds();
    let input = {
        "date": date,
        "dateTomorrow": dateTomorrow,
        "idLapangan":1,
    }

    // let data = await database.tes();
    let data = await database.getKetersediaan(input);
    // // let data = await database.imageLapangan("poliuretan");
    // console.log(data);
    console.log(data);
    // console.log(data[0].nyoba);
    // console.log(typeof data[0].nyoba );
    // console.log(data[0].scheduleBookingStart);
    // console.log(typeof data[0].scheduleBookingStart);
    
    res.send(data);
});

app.listen(port,function(){
    console.log("Server has started at port " + port);
});




