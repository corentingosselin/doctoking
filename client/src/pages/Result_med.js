import '../css/Result_patient.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import {Link} from "react-router-dom";

function ResultMed() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
            <h1>Trouver un médecin !</h1>

                <div className='pagepa'>
                    <div className=''>
                        <div className='titlepa'>
                            <span>Nom</span>
                            <span>Prénom</span>
                            <span>Numéro téléphone</span>
                            <span>Adresse mail</span>
                            <span>Spécialisation</span>
                            <span> Selection patient</span>
                        </div>
                        <div className='resultpa1'>
                            <div className='resultpa'>
                            <span> Corentin </span>
                            <span> Gosselin </span>
                            <span> 0620315788 </span>
                            <span> nathan_cuchvl@outlook.fr</span>
                                <span>Proctologue</span>
                                <button className='buttonresult'>Selection</button>
                            </div>
                        </div>

                    </div>
                </div>

        </div>
    );
}

export default ResultMed;
