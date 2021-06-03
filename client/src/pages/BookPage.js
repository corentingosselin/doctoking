import React from 'react';
import styled from 'styled-components';
import CalendarBookingSlot from '../components/CalendarBookingSlot'

const BookPage = () => {
    return (
        <Style>
            <h1 className="book-title">Prise de rendez-vous</h1>

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

                <CalendarBookingSlot />
            </div>
        </Style>
    )
}

const Style = styled.div`

    text-align: center;

    .title {
        margin: 30px;
        font-weight: normal;
    }

    .info {
        display:flex;
        flex-direction: column;
        padding-top: 20px;
        font-size: 20px;
            color: darkgrey;

    }


    .coords {
        display:flex;
        flex-direction: column;
        padding-top: 20px;

    }



    .doctor-profile {
        display: flex;
        flex-direction: column;
        margin: 100px;
    }

    .book-title {
        margin: 5%;

    }

    .book {
        display: flex;
        justify-content: space-around;

    }


    .profile {
        margin: 30px;

    }
`;


export default BookPage;