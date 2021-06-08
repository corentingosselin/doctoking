import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as DoctorMale } from '../../imgs/doctor_male.svg';
import { ReactComponent as DoctorFemale } from '../../imgs/doctor_female.svg';


const BookCard = (props) => {
    const doctor = props.doctor;
    return (
        <Style>

            <a>Lundi 17 mai</a>
            <a>18h30</a>
            {doctor.gender == 'female' ?
                <DoctorFemale className="profile-picture" /> :
                <DoctorMale className="profile-picture" />}
            <a className="title"> {props.title || "Dr. name surname"}</a>
            <a className="card-text"> {props.job || "Médecin généraliste"}</a>
            <a className="card-text" id="city"> {props.city || "Ville"}</a>
            

            <button className="btn-book">Annuler le rendez-vous</button>

        </Style>
    )
}

const Style = styled.div`
    margin: 30px;
    width: 350px;
    height: 400px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
    #city {
        padding-top: 10px;
    }
    .title {
        color: gray;
        font-weight: bold;
    }

    .card-text {
        padding-top: 5px;
        color: gray;
    }

    .profile-picture {
        height: 100px;
        width: 100px;
        margin: 20px;
        border-radius: 10px;
    }

    .btn-book {
        border-radius: 5px;
        margin: 20px;
        background: #38b6b2;
        color: white;
        font-weight: bold;
        border: none;
        width: 60%;
        font-size: 15px;
        height: 40px;
      }



`;

export default BookCard;