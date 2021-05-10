import '../css/About.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Link} from "react-router-dom";

function Admin() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
            <span>Administrateur Doctoking</span>

            <Link to='/appointment'>
                <button class="button  search">Prise de rendez vous</button>
            </Link>
        </div>
    );
}

export default Admin;
