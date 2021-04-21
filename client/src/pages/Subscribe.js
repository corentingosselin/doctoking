import '../css/Subscribe.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon} from 'mdbreact';

function Subscribe() {
    return (
        <div>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
              type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />

                <div className="testbox">
                    <h1>Inscription</h1>

                    <form action="/">

                                <label id="icon" htmlFor="name"><i className="icon-envelope "/></label>
                                <input type="text" name="name" id="name" placeholder="Adresse mail" required/>
                                <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                                <input type="text" name="name" id="name" placeholder="Prénom" required/>
                                <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                                <input type="text" name="name" id="name" placeholder="Nom" required/>
                                <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                                <input type="text" name="name" id="name" placeholder="Ville" required/>
                                <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                                <input type="text" name="name" id="name" placeholder="Adresse" required/>
                                <label id="icon" htmlFor="name"><i className="icon-user"/></label>
                                <input type="tel" name="name" id="name" placeholder="Numéro de téléphone" required/>
                                <label id="icon" htmlFor="name"><i className="icon-shield"/></label>
                                <input type="password" name="name" id="name" placeholder="Mot de passe" required/>
                                <label id="icon" htmlFor="name"><i className="icon-shield"/></label>
                                <input type="password" name="name" id="name" placeholder="Confirmer mot de passe" required/>
                                <div className="gender">
                                    <input type="radio" value="None" id="male" name="gender" checked/>
                                    <label htmlFor="male" className="radio" >Homme</label>
                                    <input type="radio" value="None" id="female" name="gender"/>
                                    <label htmlFor="female" className="radio">Femme</label>
                                </div>
                                <a href="#" className="button">Inscription</a>
                    </form>
                </div>
        </div>
    );
}

export default Subscribe;
