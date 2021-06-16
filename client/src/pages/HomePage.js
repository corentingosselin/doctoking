import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../imgs/doctor_male.svg';
import Chatbot from "react-chatbot-kit";
import MessageParser from '../bot/MessageParser';
import actionProvider from '../bot/ActionProvider';
import config from '../bot/config';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const HomeButtons = (props) => {

    if (props.isLoggedIn) {
        if (props.role == 'doctor') {
            return <React.Fragment>
                <Link to="/account">
                    <button className="btn" id="btn-patient">Mon compte</button>
                </Link>
                <Link to="/books-doctor">
                    <button className="btn" id="btn-doctor">Mes rendez-vous</button>
                </Link>
            </React.Fragment>;
        } else if (props.role == 'patient') {
            return <React.Fragment>
                <Link to="/search">
                    <button className="btn" id="btn-patient">Rechercher un médecin</button>
                </Link>
                <Link to="/books">
                    <button className="btn" id="btn-doctor">Mes rendez-vous</button>
                </Link>
            </React.Fragment>;
        }

    } else {
        return <React.Fragment>
            <Link to="/register">
                <button className="btn" id="btn-patient">Je suis patient</button>
            </Link>
            <Link to="/register-doctor">
                <button className="btn" id="btn-doctor">Je suis médecin</button>
            </Link>
        </React.Fragment>;
    }

}


const HomePage = (props) => {
    const { auth } = props;

    return (
        <Style>
            <Logo id="main-logo" />
            <Toaster />

            <div className="content flex-column">
                <h1 className="title">Votre docteur à portée de main</h1>

                <div className="btns flex">

                    <HomeButtons role={auth.user.role} isLoggedIn={auth.isLoggedIn} />

                </div>
            </div>
            <div id="chat">
                <Chatbot config={config} messageParser={MessageParser} actionProvider={actionProvider} />
            </div>
        </Style>
    )
}



const Style = styled.div`

    #chat {
        position: fixed;
        right: 30px;
        bottom: 0px;
        width: 400px;
    }

    .title {
        font-size: 70px;
        color: black;
        padding-top: 100px;

    }

    .content {
        align-items: center;
    }

    .btns {
        margin: 50px;
        padding-top: 60px;
    }



    #main-logo {
        width:25%;
        height: auto;
        bottom: 0px;
        position: fixed;
    }

    .btn {
        border-radius: 5px;
        margin: 20px;
        padding: 50px 80px 50px 80px;
        color: white;
        font-weight: bold;
        border: none;
        width: auto;
        font-size: 30px;
        height: auto;
        background: #38b6b2;
      }

      #btn-doctor {
          background: #0D8BAD;
      }

    
      
`;

const mapStateToProps = (state) => {
    return {
        auth: state.authState
    };
};


export default connect(mapStateToProps)(HomePage);