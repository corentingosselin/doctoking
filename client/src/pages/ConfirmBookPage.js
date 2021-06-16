import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DoctorMale } from '../imgs/doctor_male.svg';
import { ReactComponent as DoctorFemale } from '../imgs/doctor_female.svg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createBook } from 'redux/actions/BookingAction';

const ConfirmBookPage = (props) => {

    const history = useHistory();
    const auth  = useSelector((state) => state.authState);
    const doctor = props.location.state.doctor;
    const book = props.location.state.book;
    const job = doctor.titles[0].name;
    const jobUpperCase = job.charAt(0).toUpperCase() + job.slice(1);
    const dispatch = useDispatch()

    const [body, setBody] = useState(
        {
            start: book.date,
            slotId: book.id,
            slot: book.slot,
            patientId:  auth.user.id,
            description: '',
            doctorId: doctor.id
        });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createBook(body));
        //axios.post('/booking', body);
        history.push('/books');
    }


    return (
        <Style>
            <div className="head">
                <h1>Confirmation du rendez-vous</h1>
                <h2>{book.day} à {book.time}</h2>
            </div>

            <div className="book">
                <div className="doctor-profile">
                    <h1 className="title"> Dr. {doctor.last_name} {doctor.first_name}</h1>
                    {doctor.gender == 'female' ?
                <DoctorFemale className="profile-picture" /> :
                <DoctorMale className="profile-picture" />}
                    <div className="info">
                        <a> {jobUpperCase}</a>
                        <div className="coords">
                            <a id="city"> {doctor.city}</a>
                            <a id="address"> {doctor.address}</a>
                        </div>

                    </div>
                </div>

                <div className="reason">
                    <h2 className="title-reason">Indiquez la raison</h2>
                    <div className="center">
                        <textarea onChange={(event) => {
                        const description = event.target.value;
                        setBody({ ...body, ...{ description } });
                    }} >

                        </textarea>
                        <button className="btn-book" onClick={submitHandler}>Confirmer le rendez-vous</button>
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