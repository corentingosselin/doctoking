import '../css/App.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {Link} from "react-router-dom";


function Nav() {
    return (
        <div>
            <div className="header">
                    <Link to='/about'>
                        <Logo className='logo' />
                    </Link>
                <div className="button">
                    <Link className="brk-btn" to='/subscribe'>
                        Inscription
                    </Link>
                    <Link className="brk-btn" to='/authentication'>
                        Connexion
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Nav;
