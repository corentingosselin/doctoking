import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as DoctorMale } from '../../imgs/doctor_male.svg';
import { ReactComponent as DoctorFemale } from '../../imgs/doctor_female.svg';
import { ReactComponent as Male } from '../../imgs/man.svg';
import { ReactComponent as Female } from '../../imgs/woman.svg';
import { useDispatch } from 'react-redux';
import { deleteBooking } from 'redux/actions/BookingAction';


const ProfilePicture = (props) => {
    if (props.gender == 'female') {
        if (props.role == 'doctor')
            return <DoctorFemale className="profile-picture" />;
        else if (props.role == 'patient')
            return <Female className="profile-picture" />;
    } else {
        if (props.role == 'doctor')
            return <DoctorMale className="profile-picture" />;
        else if (props.role == 'patient')
            return <Male className="profile-picture" />;
    }
};

const BookCard = (props) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBooking(props.id));
    };


    const user = props.user;
    return (
        <Style>

            <a>{props.date}</a>
            <a>{props.time}</a>

            <ProfilePicture role={props.role} gender={user.gender} />
            <a className="title"> {props.role == 'doctor' ? 'Dr.' : ''} {user.last_name} {user.first_name}</a>
            {props.role == 'doctor' &&
                <a className="card-text"> {user.title || "Médecin généraliste"}</a>}
            <a className="card-text" id="city"> {user.city || "Ville"}</a>
            <a className="card-text" id="address"> {user.address || "Addresse"}</a>


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