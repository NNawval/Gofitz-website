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
    // let data = await database.getData();
    // console.log(data);
    // let data = await database.addData();
    let data = await database.updateData();

    res.send(data)
});

app.listen(port,function(){
    console.log("Server has started at port " + port);
});




