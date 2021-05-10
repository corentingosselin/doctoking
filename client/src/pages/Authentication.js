import '../css/Authentication.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Link} from "react-router-dom";

function Authentication() {
    return (
        <div>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
              type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />

                <div className="testbox1">
                    <h1>Connexion</h1>

                    <form action="/">
                                <label id="icon" htmlFor="name"><i className="icon-envelope "/></label>
                                <input type="text" name="name" id="name" placeholder="Adresse mail" required/>
                                <label id="icon" htmlFor="name"><i className="icon-shield"/></label>
                                <input type="password" name="name" id="name" placeholder="Mot de passe" required/>
                        <Link to='/appointment'>
                                <a className="button">Connexion</a>
                        </Link>
                    </form>
                </div>
        </div>
    );
}

export default Authentication;
