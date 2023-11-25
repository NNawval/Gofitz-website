import React from "react";
import database from "../models/database";
import {Form, Card} from "react-bootstrap"

function FormReserve(props){

    const[reservasi, setReservasi] = React.useState(
        { namaPemesan: "", lapanganId: props.lapangan, scheduleBookingStart: new Date(), scheduleBookingEnd: new Date( new Date().getTime() + 2*3600*1000), totalHarga: props.totalHarga, ssPayment: ""
    });

    const [image, setImage] = React.useState("");

    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleChange2 = (event) => {
      setSelectedFile(event.target.files[0]);
      const input = event.currentTarget;
  
      var reader = new FileReader();
      reader.onload = function () {
        const dataURL = reader.result;
        setImage({ name: input.files[0].name, src: dataURL });
      };
      reader.readAsDataURL(input.files[0]);
      console.log(image.name)
    };

    function handlerChange(event){
          setReservasi(prevFormData=>{
            return{
              ...prevFormData,
              [event.target.name]:event.target.value
            }
          })
    }

    // function handlerSubmit(event){
    //     event.preventDefault();
    //     console.log("submit masuk");
    //     createReservasi();
    // }

    async function createReservasi(){
        let dummy = reservasi
        dummy.ssPayment = selectedFile.name;
        await database.createReservasi(dummy);
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
    
        // Check if a file is selected
        if (selectedFile) {
          console.log("masuk");
          try {
            // Upload the file to Supabase storage
            const { data, error } = await database.supabase
            .storage
            .from('SSpayment')
            .upload(`images/${selectedFile.name}`, selectedFile);
            console.log("masuk 2");
            if (error) {
              console.error('Error uploading image:', error.message);
            } else {
              console.log('Image uploaded successfully:', data);
            }
          } catch (error) {
            console.log("gagal ke bucket");
            console.error('Error uploading image:', error.message);
          }
        } else {
          // Handle the case where no file is selected
          console.warn('No file selected for upload');
        };
        reservasi.ssPayment =  selectedFile.name;
        createReservasi();
      };

    function File(props){
        
        if (props === true){
            return (
                <div className="col-12">
                <Form.Group className="mb-3" style={{maxWidth: "500px"}}>
                    <Form.Control type="file" accept="image/png, image/jpeg" onChange={handleChange2}/>
                </Form.Group>
                <Card.Img variant="top" src={image.src} />
                </div>
              );
        }
        else{
            return(
                <></>
            );
        }
    }


    let d = reservasi.scheduleBookingStart.toTimeString().split(" ")[0]+"-"+reservasi.scheduleBookingEnd.toTimeString().split(" ")[0];

    return(
        <div className="container-fluid px-5 px-lg-2 mt-4 mx-0 text-start">
            <hr className="d-none d-lg-block" />
            <h4 className="mb-3">Pesananmu</h4>
            <div className="d-flex justify-content-between">
                <p><b>Tanggal</b></p>
                <p>{reservasi.scheduleBookingStart.toLocaleDateString('id', {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'})}</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-0"><b>Jam</b></p>
                <p className="mb-0">{d}</p>
            </div>
            <hr/>
            <h4 className="mb-3">Masukkan data diri</h4>
            <form onSubmit={handlerSubmit}>
                <div className="form-floating mb-3" >
                    <input type="text" className="form-control rounded-3" id="nama" name="namaPemesan" placeholder="Nama"  onChange={handlerChange} />
                    <label htmlFor="nama" >Nama</label>
                </div>
                {File(props.online)}
                <small className="text-body-secondary">By clicking Pesan, you agree to the terms of use.</small>
                <button className="w-100 mt-3 btn btn-lg rounded-3 btn-success" type="submit" >Pesan</button>
            </form>
        </div>
    );
}

export default FormReserve;