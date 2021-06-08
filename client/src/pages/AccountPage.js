import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const AccountPage = (props) => {
    const { auth } = props;
    return (
        <Style>
            <h1 className="book-title">Mon compte</h1>

            <div className="book">
                <div className="doctor-profile">
                    <h1 className="title"> {auth.user.last_name} {auth.user.first_name}</h1>
                    <div className="info">
                        <a> {auth.user.email}</a>
                        <div className="coords">
                            <a id="city"> {auth.user.city}</a>
                            <a id="address"> {auth.user.address}</a>
                        </div>

                    </div>
                </div>
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

const mapStateToProps = (state) => {
    return {
        auth: state.authState
    };
};



export default connect(mapStateToProps) (AccountPage);