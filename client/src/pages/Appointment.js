import '../css/About.css';
import '../css/Appointment.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Link} from "react-router-dom";

function Appointment() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
            <h1>Définir un rendez-vous !</h1>

            <div className='forms_a'>
                <div className='forms_appointment'>
                    <div>
                    <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                    <input type="text" name="name" id="name" placeholder="Patient" required/>
                    </div>
                    <div>
                    <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                    <input type="text" name="name" id="name" placeholder="Médecin" required/>
                    </div>
                    <div>
                    <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                    <input type="text" name="name" id="name" placeholder="Date" required/>
                    </div>
                    <div>
                    <a className="button">Recherche</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appointment;
