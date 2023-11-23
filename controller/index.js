const express = require("express");
const bodyParser = require("body-parser");
const database = require("../models/database")

const app = express();

// let port = process.env.PORT;
// if(port == null || port == ""){
//     port == 8000;
// }

let port = 8000;


app.get("/",async function(req,res){
    let date = new Date();
    let dateTomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    // let idLapangan = 1;
    // let input = {
    //     "date": date,
    //     "dateTomorrow": dateTomorrow,
    //     "idLapangan":idLapangan
    // }
    // console.log(input);
    // let data = await database.getKetersediaan(input);
    console.log(typeof date);
    console.log(date.year);
    let a = toString(date).split("+");
    console.log(typeof a);
    let c = toString(dateTomorrow).split("+");
    console.log(a);
    console.log(c);
    let b = a[0];
    let d = c[0] + ("T00:00:00+00:00");
    console.log(b);
    console.log(d);
    b = new Date(b);
    d = new Date(d);
    console.log(b);
    console.log(d);
    let input = {
        "date": b,
        "dateTomorrow": d,
        "idLapangan":1
    }
    let data = await database.getKetersediaan(input);
    console.log(data);
    res.send(data)
});

app.listen(port,function(){
    console.log("Server has started at port " + port);
});




