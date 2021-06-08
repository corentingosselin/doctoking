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
import { Link } from 'react-router-dom';
library.add(
    faSearch,
)


const Navbar = (props) => {
    const { auth } = props;
    return (
        <NavbarStyle>
            <Link className="link" to="/">
                <Logo id="logo" />
            </Link>
            <ul>
                <li>
                    <Link className="link" id="go-search" to="/search"> <FontAwesomeIcon icon={faSearch} size="1x" /> Rechercher un médecin</Link>
                </li>
            </ul>

            {auth.isLoggedIn ? (
                <React.Fragment>
                    <button href="#">Mon compte</button>
                </React.Fragment>

            ) :
                (
                    <React.Fragment>
                        <Link className="link" to="/login">
                            <button>connexion</button>
                        </Link>
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

    #go-search {
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
        padding: 10px;
        font-weight: bold;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 5px;
        border: none;
        font-size: 15px;
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