import '../css/App.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {Link} from "react-router-dom";


function Search_admin() {
    return (
        <div className="search_medic">
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />

            <div>
                <div className='title1'>
                    <h1 className='medic'>Rerchercer un compte administrateur</h1>
                </div>
                <div className='input1'>
                    <input type="text" name="name" id="name" placeholder="administrateur" required/>
                    <a href="#" className="button_search">Recherche</a>
                </div>
            </div>
        </div>
    );

}

export default Search_admin;
