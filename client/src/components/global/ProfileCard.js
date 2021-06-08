import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as DoctorMale } from '../../imgs/doctor_male.svg';
import { ReactComponent as DoctorFemale } from '../../imgs/doctor_female.svg';

const ProfileCard = (props) => {
    const doctor = props.doctor;
    return (
        <Style>

            {doctor.gender == 'female' ?
                <DoctorFemale className="profile-picture" /> :
                <DoctorMale className="profile-picture" />}

            <a className="title"> Dr.  {doctor.last_name}  {doctor.first_name}</a>
            <a className="card-text"> {doctor.titles[0].name || "Médecin généraliste"}</a>
            <a className="card-text" id="city"> {doctor.city || "Ville"}</a>
            <Link to={{
                pathname: `/doctor/${doctor.id}`,
                state: { doctor: doctor }
            }}>
                <button className="btn-book">Vérifier les disponibilités</button>
            </Link>
        </Style>
    )
}

const Style = styled.div`
    margin: 30px;
    width: 300px;
    height: 280px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
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
        width: 70%;
        font-size: 15px;
        height: 40px;
      }



`;



export default ProfileCard;