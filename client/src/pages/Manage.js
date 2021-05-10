import '../css/App.css';
import '../css/Manage.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {Link} from "react-router-dom";


function Manage() {
    return (

        <div className='btn_manage_all'>
            <Link to='/create_account_med'>
            <button className='btn_manage'> Créer un compte médecin </button>
            </Link>

            <Link to='/create_account_pat'>
                <button className='btn_manage'> Créer un compte Patient </button>
            </Link>


            <Link to='/appointment'>
                <button className='btn_manage'> Prendre un rendez-vous </button>
            </Link>

            <Link to='/manage_account'>
                <button className='btn_manage'> Gérer les différents comptes </button>
            </Link>

        </div>

    );

}

export default Manage;
