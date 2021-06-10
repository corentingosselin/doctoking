import React from 'react';
import styled from 'styled-components';
import CalendarBookingSlot from '../components/CalendarBookingSlot'
import { ReactComponent as DoctorMale } from '../imgs/doctor_male.svg';
import { ReactComponent as DoctorFemale } from '../imgs/doctor_female.svg';

const BookPage = (props) => {
    const doctor = props.location.state.doctor;
    const job = doctor.titles[0].name;
    const jobUpperCase = job.charAt(0).toUpperCase() + job.slice(1);

    return (
        <Style>
            <h1 className="book-title">Prise de rendez-vous</h1>

            <div className="book">
                <div className="doctor-profile">
                    <h1 className="title"> Dr. {doctor.last_name}  {doctor.first_name}</h1>
                    <h2 id="phone">+ {doctor.phone} </h2>
                    
            {doctor.gender == 'female' ?
                <DoctorFemale className="profile" /> :
                <DoctorMale className="profile" />}
                    <div className="info">
                        <a id="job"> {jobUpperCase}</a>
                        <div className="coords">
                            <a id="city"> {doctor.city}</a>
                            <a id="address"> {doctor.address}</a>
                        </div>

                    </div>
                </div>
                <CalendarBookingSlot doctor={doctor} />
            </div>
        </Style>
    )
}

const Style = styled.div`

    text-align: center;

    .title {
        margin: 20px;
        font-weight: normal;
    }

    .info {
        display:flex;
        flex-direction: column;
        padding-top: 20px;
        font-size: 20px;
            color: darkgrey;

    }

    #job {
        color: #273036;
    }

    #phone {
        padding-bottom: 20px;
        font-weight: normal;
        color: #273036;
    }


    .coords {
        display:flex;
        flex-direction: column;
        padding-top: 20px;
        color: #494B4C;

    }



    .doctor-profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px;
        width: 300px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 20px;
    }

    .book-title {
        margin: 5%;

    }

    .book {
        display: flex;
        justify-content: space-around;

    }


    .profile {
        width: 100px;
        height: 100px;

    }
`;


export default BookPage;