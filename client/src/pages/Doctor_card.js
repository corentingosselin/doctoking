import '../css/Doctor_card.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {Link} from "react-router-dom";


function DoctorCard() {
    return (

        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />

            <span className='doctor'> Mr Corentin Gosselin</span>

                <div className='doctor1'>
                    <div className='doctorinfo'>
                        <span> Email : aha@yopmail.com</span>
                        <span> Nom : Corentin </span>
                        <span> Prénom : Gosselin </span>
                        <span> Spécialitée : Proctologue</span>
                        <div className='datedoctor'>
                            <span> Dates disponibles : </span>
                        </div>
                    </div>
                </div>
        </div>

    );

}

export default DoctorCard;
