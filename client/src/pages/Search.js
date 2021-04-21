import '../css/Search.css';
import '../css/Search_result.css';

import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Link} from "react-router-dom";

function Search() {
    return (
        <div className='search'>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
            <h1 className='medic'>Rerchercer un médecin</h1>
            <input type="text" name="name" id="name" placeholder="Medecin" required/>
            <input type="text" name="name" id="name" placeholder="Où" required/>
            <Link to='search_result'>
            <a href="#" className="button_search">Recherche</a>
            </Link>
        </div>
    );
}

export default Search;
