
import React from "react";
import { useRef, useState} from "react";
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from "../../../models/database";



function FormReservasi(prompt){

    function File(prompt){
        
        if (prompt === true){
            return (
              <div className="col-12">
                <label><b>Upload foto</b></label>
                <input  type="file" className="d-block" accept = "image/png, img/jpeg" />
              </div>
            );
        }
        else{
            return(
                <></>
            );
        }
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
                        {File(prompt.online)}                
                </form>
        </div>
    );
}

export default FormReservasi;