import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as DoctorMale } from '../../imgs/doctor_male.svg';
import { ReactComponent as DoctorFemale } from '../../imgs/doctor_female.svg';
import { useDispatch } from 'react-redux';
import { deleteBooking } from 'redux/actions/BookingAction';


const BookCard = (props) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBooking(props.id));
      };
    

    const doctor = props.doctor; 
    return (
        <Style>

            <a>{props.date}</a>
            <a>{props.time}</a>
            {doctor.gender == 'female' ?
                <DoctorFemale className="profile-picture" /> :
                <DoctorMale className="profile-picture" />}
            <a className="title"> Dr. {doctor.last_name} {doctor.first_name}</a>
            <a className="card-text"> {doctor.title || "Médecin généraliste"}</a>
            <a className="card-text" id="city"> {doctor.city || "Ville"}</a>
            <a className="card-text" id="address"> {doctor.address || "Addresse"}</a>
            

            <button className="btn-cancel" onClick={handleDelete}>Annuler le rendez-vous</button>

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

    .btn-cancel {
        border-radius: 5px;
        margin: 20px;
        background: #AC0025;
        color: white;
        font-weight: bold;
        border: none;
        width: 60%;
        font-size: 15px;
        height: 40px;
      }



`;

export default BookCard;