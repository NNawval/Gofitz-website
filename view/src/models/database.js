const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://rrdwyabynnlseyxhwqqx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZHd5YWJ5bm5sc2V5eGh3cXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMjM2ODUsImV4cCI6MjAxNTY5OTY4NX0.yWJaSdDvKABNHJCn6lZEenp4ld-I_S0ysu_VyEpcHGs";

const supabase = createClient(supabaseUrl, supabaseKey);



// async function getData(){
//     try{
//         const {data,error} = await supabase
//         .from('tes')
//         .select()
//         console.log(data);
//         return data
//     } catch (error){
//         console.log("gagal select");
//     }
// }

// async function addData(){
//     try{
//         const {data, error} = await supabase
//         .from('tes')
//         .insert({
//             nama: "tikus",
//             nomor: 2
//         })
//         console.log(data);
//     }
//     catch(error){
//         console.log("gagal insert")
//     }
// }

// async function updateData(){
//     try{
//         const { error } = await supabase
//             .from('tes')
//             .update({nama: "angsa"})
//             .eq('id',4);
//             console.log("sukses");
//     }
//     catch(error){
//         console.log("gagal");
//     }
// }

async function getReservasi(prompt){
    try{
        const {data, error} = await supabase
        .from('reservasi')
        .select()
        .eq('id',prompt.id)
        .gte('scheduleBookingStart',prompt.date);
        console.log(data);
        return data;
    }
    catch(error){
        console.log("gagal");
    }
};

async function untungOwner(){
    try {
        const { data, error} = await supabase
        .from("totalpendapatan")
        .select();
        console.log(data);
        return data;
    } catch (error){
        console.log("gagal");
    }
};

async function countjumlahReservasi(){
    try {
        const { data, error} = await supabase
        .from("jumlahpelanggan")
        .select();
        console.log(data);
        return data;
    } catch (error){
        console.log("gagal");
    }
};

async function getDataLapangan (){
    try {
        const { data, error} = await supabase
        .from("lapangan")
        .select();
        console.log(data);
        return data;
    } catch (error){
        console.log("gagal");
    }
};

async function getKetersediaan(prompt){
    try{
        const { data , error } = await supabase
        .from("reservasi")
        .select("id,lapanganId,scheduleBookingStart,scheduleBookingEnd")
        .match({
            'lapanganId': prompt.idLapangan,
        })
        .gte('scheduleBookingStart',prompt.date)
        .lt('scheduleBookingStart',prompt.dateTomorrow)
        console.log(data);
        return data;
    } catch (error){
        console.log("gagal");
    }
}

async function imageLapangan(props){
    const {data, error} = await supabase
    .storage
    .from('Lapangan gambar')
    .getPublicUrl(`lapangan-${props}.jpg`)
    if(error){
        console.log("gagal");
    }
    else{
        return data;
    }
}

async function tes(){
    const { data , error } = await supabase
    .from("reservasi")
    .select()
    .eq("id",4)
    return data;
}
module.exports = {
    supabase,
    getReservasi,
    countjumlahReservasi,
    untungOwner,
    getDataLapangan,
    getKetersediaan,
    tes,
    imageLapangan
};