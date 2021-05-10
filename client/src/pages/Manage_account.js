import '../css/About.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Link} from "react-router-dom";

function Manage_account() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
            <div>
                <div>
                <span className='profil'>Tous les types de profils</span>
                </div>
                    <div className='buttons'>
                        <Link to='/manage_account/search_medic'>
                            <button className='button2'> Médecin </button>
                        </Link>

                        <Link to='/manage_account/search_pat'>
                            <button className='button2'> Patient </button>
                        </Link>
                        <Link to='/manage_account/search_admin'>
                            <button className='button2'> Administrateur </button>
                        </Link>
                </div>
            </div>
        </div>
    );
}

export default Manage_account;
