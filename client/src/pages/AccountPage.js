import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoutAuthAction } from 'redux/actions/AuthActions';
import styled from 'styled-components';
import { ReactComponent as Male } from '../imgs/man.svg';
import { ReactComponent as Female } from '../imgs/woman.svg';
import { ReactComponent as DoctorMale } from '../imgs/doctor_male.svg';
import { ReactComponent as DoctorFemale } from '../imgs/doctor_female.svg';


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


const AccountPage = (props) => {
    const { auth } = props;
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(LogoutAuthAction())
    };

    return (
        <Style>
            <h1 className="book-title">Mon compte</h1>

            <div className="doctor-profile">

                <div className="flex info-element content">


                    <div className="flex">
                        <div className="flex-column info-element center">
                            <h1 className="title"> {auth.user.last_name} {auth.user.first_name}</h1>
                            <ProfilePicture role={auth.user.role} gender={auth.user.gender}/>
                        </div>

                        <div className="info">

                            <div className="info-element">
                                <h3 className="subtitle"> Addresse email</h3>
                                <a> {auth.user.email}</a>
                            </div>


                            <div className="info-element">
                                <h3 className="subtitle"> Téléphone portable</h3>
                                <a> {auth.user.phone}</a>
                            </div>
                            <div className="info-element flex-column" >
                                <h3 className="subtitle"> Coordonnées</h3>
                                <a id="city"> {auth.user.city}</a>
                                <a id="address"> {auth.user.address}</a>
                            </div>
                        </div>
                    </div>


                    <div className="buttons flex-column">
                        
                        <Link to={auth.user.role === 'patient' ? "/books" : '/books-doctor'}>
                            <button className="btn" id="btn-bookings">Mes réservations</button>
                        </Link>

                        <button className="btn" id="btn-cancel" onClick={clickHandler}>Déconnexion</button>

                    </div>

                </div>
            </div>

        </Style>
    )
}

const Style = styled.div`

display: flex;
flex-direction: column;
align-items: center;

    .content {
        justify-content: space-around;
        align-items: center;
    }

    .center {
        align-items: center;
        text-align: center;
    }

    .subtitle {
        color: black;
        font-weight: normal;
        font-size: 22px;
    }

    .title {
        font-weight: normal;
        padding-bottom: 20px;
    }

    .info-element {
        margin: 10px;;
    }

    .info {
        padding-top: 50px;
        font-size: 20px;
            color: darkgrey;

    }

    .doctor-profile {
        display: flex;
        flex-direction: column;
        margin: 100px;
        width: 50%;
        height: auto;
        min-width: 900px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .book-title {
        margin: 50px;
        text-align: center;
    }

    .profile-picture {
        width: 200px;
        height: auto;
    }

    .buttons {
        margin: 10px;
    }

    .btn {
        border-radius: 5px;
        margin: 20px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        color: white;
        font-weight: bold;
        border: none;
        width: auto;
        font-size: 20px;
        height: auto;
      }

      #btn-bookings {
        background: #38b6b2;

      }

      #btn-cancel {
        background: #AC0025;
      }

`;

const mapStateToProps = (state) => {
    return {
        auth: state.authState
    };
};



export default connect(mapStateToProps)(AccountPage);