import '../css/App.css';
import * as React from "react";
import { ReactComponent as Logo } from '../logo_DoctoKing.svg'
import {Link} from "react-router-dom";


function Home() {
    return (

        <div>
            <Link to='/admin/appointment'>
            <button> Admin mode </button>
            </Link>
        </div>

    );

}

export default Home;
