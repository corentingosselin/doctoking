import React from 'react';
import styled from 'styled-components';
import CalendarBookingSlot from '../components/CalendarBookingSlot'

const ConfirmBookPage = () => {
    return (
        <Style>

            <div className="head">
                <h1>Confirmation du rendez-vous</h1>
                <h2>Lundi 15 mars à 8h30</h2>
            </div>

            <div className="book">
                <div className="doctor-profile">
                    <h1 className="title"> Dr. name surname</h1>
                    <img className="profile-picture" src="https://via.placeholder.com/100"></img>
                    <div className="info">
                        <a> Médecin généraliste</a>
                        <div className="coords">
                            <a id="city"> Ville</a>
                            <a id="address"> Addresse</a>
                        </div>

                    </div>
                </div>

                <div className="reason">
                    <h2 className="title-reason">Indiquez la raison</h2>
                    <div className="center">
                        <textarea></textarea>
                        <button className="btn-book">Confirmer le rendez-vous</button>
                    </div>

                </div>
            </div>
        </Style>
    )
}

const Style = styled.div`

    text-align: center;

    .title {
        font-weight: normal;
        padding-bottom: 20px;
    }

    .info {
        display:flex;
        flex-direction: column;
        padding-top: 20px;
        font-size: 20px;
            color: darkgrey;

    }

    .title-reason {
        padding-bottom: 20px;
    }

    .reason { 
        display: flex;
        flex-direction: column;
        align-items: start;

    }


    .coords {
        display:flex;
        flex-direction: column;
        padding-top: 20px;

    }

    .head {
        display:flex;
        flex-direction: column;
        padding-top: 4%;
        padding-bottom: 4%;
    }


    .doctor-profile {
        display: flex;
        flex-direction: column;
    }

    .book {
        display: flex;
        justify-content: space-evenly;

    }


    .profile {
        margin: 30px;

    }

    textarea {
        width: 500px;
        height: 100px;
        margin-bottom: 30px;
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .btn-book {
        border-radius: 5px;
        background: #38b6b2;
        color: white;
        font-weight: bold;
        border: none;
        width: 70%;
        font-size: 15px;
        height: 40px;
      }

`;


export default ConfirmBookPage;