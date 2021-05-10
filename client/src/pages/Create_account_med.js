import '../css/About.css';
import '../css/Appointment.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Link} from "react-router-dom";

function Create_account_med() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
            <h1>Créer un compte médecin, patient !</h1>

            <div className='forms_a'>


                <div className='forms_appointment'>
                    <div className='forms-pa'> Formulaire Médecin </div>
                    <form action="/">

                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-envelope "/></label>
                            <input type="text" name="name" id="name" placeholder="Adresse mail" required/>
                        </div>
                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                            <input type="text" name="name" id="name" placeholder="Prénom" required/>
                        </div>
                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                            <input type="text" name="name" id="name" placeholder="Nom" required/>
                        </div>
                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                            <input type="text" name="name" id="name" placeholder="Ville" required/>
                        </div>
                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                            <input type="text" name="name" id="name" placeholder="Adresse" required/>
                        </div>
                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                            <input type="tel" name="name" id="name" placeholder="Numéro de téléphone" required/>
                        </div>
                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                            <input type="tel" name="name" id="name" placeholder="Spécialité du médecin" required/>
                        </div>
                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-shield"/></label>
                            <input type="password" name="name" id="name" placeholder="Mot de passe" required/>
                        </div>
                        <div>
                            <label id="icon" htmlFor="name"><i className="icon-shield"/></label>
                            <input type="password" name="name" id="name" placeholder="Confirmer mot de passe" required/>
                        </div>
                        <div>
                            <a className="button-forms">Créer</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create_account_med;
