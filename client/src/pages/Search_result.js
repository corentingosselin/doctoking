import '../css/Search.css';


import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';

function Search_result() {
    return (
        <div className=''>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
            <div>
                <h1 className='medic'>Médecin disponible</h1>
            </div>

            <div className='search_result'>
                <div className='result'>
                <span className='medic1'> Mr Gosselin Corentin</span>
                <span className='medic2'> Proctologue</span>
                    <div className='buttons1'>
                        <button className='button3'> Prendre une rendez vous </button>
                    </div>
                </div>
                <div className='result'>
                    <span className='medic1'> Mr Cucheval Nathan </span>
                    <span className='medic2'> Proctologue</span>
                    <div className='buttons1'>
                        <button className='button3'> Prendre une rendez vous </button>
                    </div>
                </div>
                <div className='result'>
                    <span className='medic1'> Mr Sarmi Reda</span>
                    <span className='medic2'> Proctologue</span>
                    <div className='buttons1'>
                        <button className='button3'> Prendre une rendez vous </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Search_result;
