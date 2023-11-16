
import React from "react";
import { useRef, useState} from "react";

function Form(prompt){

    function File(prompt){
        
        if (prompt === true){
            return (ShowImg());
        }
        else{
            return(
                <></>
            );
        }
    }

    function ShowImg(){
        const inputRef = useRef(null);
            const[image, setImage] = useState("");

            const handleImageClick = () =>{
                inputRef.current.click();
            }

            const handleImageChange = (event) =>{
                const file = event.target.files[0];
                console.log(file);
                setImage(event.target.files[0])
            }
            return(
                <>
                    <div className="image-upload-contsiner">
                        <div className="box-decoration">
                            <label htmlFor="image-upload-input" className="image-upload">{image ? image.name : "choose an image" }</label>
                            <div onClick={handleImageClick} style={{ cursor : "pointer" }}>
                                {image ? (
                                    <img src={URL.createObjectURL(image)} alt=""/>
                                ) : (
                                    <img src="../assets/lapangan-poliuretan.jpg" alt="" />
                                )}
                            </div>
                            
                            <input  type="file" ref={inputRef} onChange={handleImageChange} style={{display : "none"}}  className="d-block form-control"/>
                        </div>
                    </div>
                </>   
            );
    }
    return(
        <div className="comtainer border rounded mt-3">
                <form className="row m-3 text-start">
                    <div className="col-12">
                        <label><b>Nama</b></label> 
                        <input type="text" className="d-block form-control "/>
                    </div>
                        <div className="col-12">
                            <label>Nomor Telepon</label>
                            <input type="text" className="d-block form-control"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" className="d-block form-control"/>
                        </div>
                        <div>
                            {File(prompt.online)}
                    </div>                
            </form>
        </div>
    );
}

export default Form;