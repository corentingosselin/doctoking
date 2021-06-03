import * as React from 'react';
import styled from 'styled-components';


const ProfileCard = (props) => {
    return (
        <Style>

            <img className="profile-picture" src="https://via.placeholder.com/100"></img>
            <a className="title"> {props.title || "Dr. name surname"}</a>
            <a className="card-text"> {props.job || "Médecin généraliste"}</a>
            <a className="card-text" id="city"> {props.city || "Ville"}</a>
            <button className="btn-book">Vérifier les disponibilités</button>

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