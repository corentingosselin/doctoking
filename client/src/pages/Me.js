import '../css/Me.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {Link} from "react-router-dom";


function Me() {
    return (

        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet'
                  type='text/css' />
            <link href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />

            <span className='resultme'> Mes informations</span>

                <div className='me'>
                    <div className='displayMe'>
                        <span> Email : aha@yopmail.com</span>
                        <span> Nom : Cucheval </span>
                        <span> Prénom : Nathan </span>
                        <span> Mot de passe : lalala</span>
                        <div className='buttonMe2'>
                            <button className='buttonMe'> Modifier mes informations </button>
                        </div>
                    </div>
                </div>
        </div>

    );

}

export default Me;
