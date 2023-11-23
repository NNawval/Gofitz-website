
import React from "react";
import { useRef, useState} from "react";
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from "../../../models/database";



function FormReservasi(prompt){
    const [ images, setImages ] = useState([])

    // async function uploadImage(e) {
    //     let file = e.target.files[0];
    
    //     // userid: Cooper
    //     // Cooper/
    //     // Cooper/myNameOfImage.png
    //     // Lindsay/myNameOfImage.png
    
    //     const { data, error } = await supabase
    //       .storage
    //       .from('images')
    //       .upload(user.id + "/" + uuidv4(), file)  // Cooper/ASDFASDFASDF uuid, taylorSwift.png -> taylorSwift.png
    
    //     if(data) {
    //       getImages();
    //     } else {
    //       console.log(error);
    //     }
    //   }

    //   async function getImages() {
    //     const { data, error } = await supabase
    //       .storage
    //       .from('images')
    //       .list(user?.id + "/", {
    //         limit: 100,
    //         offset: 0,
    //         sortBy: { column: "name", order: "asc"}
    //       });   // Cooper/
    //       // data: [ image1, image2, image3 ]
    //       // image1: { name: "subscribeToCooperCodes.png" }
    
    //       // to load image1: CDNURL.com/subscribeToCooperCodes.png -> hosted image
    
    //       if(data !== null) {
    //         setImages(data);
    //       } else {
    //         alert("Error loading images");
    //         console.log(error);
    //       }
    //   }
    

    // function File(prompt){
        
    //     if (prompt === true){
    //         return (<>
    //              <Form.Control  type="file" accept = "image/png, img/jpeg" onChange={(e)=> {uploadImage(e)}}/>
    //         </>);
    //     }
    //     else{
    //         return(
    //             <></>
    //         );
    //     }
    // }

    return(
        <div className="comtainer border rounded mt-3">

                {/* <Form.Group className="row m-3 text-start">
                    <div className="col-12">
                        <Form.label><b>Nama</b></Form.label> 
                        <input type="text" className="d-block form-control "/>
                    </div>
                        <div className="col-12">
                            <Form.label>Nomor Telepon</Form.label>
                            <input type="text" className="d-block form-control"/>
                        </div>
                        <div>
                            <Form.label>Email</Form.label>
                            <input type="email" className="d-block form-control"/>
                        </div>
                        <div>
                            {File(prompt.online)}
                    </div>                
                </Form.Group>
                <Row xs={1} md={3} className="g-4">
            {images.map((image) => {
              return (
                <Col key={CDNURL + user.id + "/" + image.name}>
                  <Card>
                    <Card.Img variant="top" src={CDNURL + user.id + "/" + image.name} />
                    <Card.Body>
                      <Button variant="danger" onClick={() => deleteImage(image.name)}>Delete Image</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row> */}
        </div>
    );
}

export default FormReservasi;