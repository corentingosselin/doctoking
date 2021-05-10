import '../css/About.css';
import '../css/Manage.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Link} from "react-router-dom";

function About() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
            <div className='slogan'>
                <span className='slogan2'>Don't be ill be the king.</span>
            </div>
            <div className='btn_manage_all'>
                <Link to='/search'>
                    <button className='btn_manage'>Recherche</button>
                </Link>

                <Link to='/manage'>
                    <button className='btn_manage'> Admin manage </button>
                </Link>
            </div>
        </div>
    );
}

export default About;
