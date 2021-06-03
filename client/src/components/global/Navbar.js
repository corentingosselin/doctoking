import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../imgs/logo_simple.svg';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import { LogoutAuthAction } from 'redux/actions/AuthActions';
library.add(
    faSearch,
)


const Navbar = (props) => {
    const { auth } = props;
    return (
        <NavbarStyle>

            <Logo id="logo" />
            <ul>
                <li>
                    <a href="#">  <FontAwesomeIcon icon={faSearch} size="1x" /> Rechercher un médecin</a>
                </li>
            </ul>

            {auth.isLoggedIn ? (
                <React.Fragment>
                        <button href="#">Mon compte</button>
                </React.Fragment>

            ) :
                (
                    <React.Fragment>
                        <button href="#">Connexion</button>
                    </React.Fragment>
                )
            }

        </NavbarStyle>


    )
}

const NavbarStyle = styled.div`
    height: 100px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    background: #273036;
    align-items: center;
    padding: 1rem 5rem;
    
    #logo {
        width:150px;
        height: auto;
    }

    a {
        color: lightgray;
        font-size: 19px;
        text-decoration: none;
        border: solid lightgray 2px;
        padding: 8px;
        border-radius: 8px;

    }

    button {
        background: #38b6b2;
        color: white;
        padding: 7px;
        font-weight: bold;
        width: 160px;
        height: 50px;
        border-radius: 8px;
        border: none;
        font-size: 20px;
    }

    ul {
        list-style: none;
    }

    @media (max-width: 768px) {
        ul {
            visibility: hidden;
        }
    }

`;


const mapStateToProps = (state) => {
    return {
        auth: state.authState
    };
};



export default connect(mapStateToProps)(Navbar);