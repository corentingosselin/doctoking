import React from 'react';
import styled from 'styled-components';

const NotFoundPage = () => {

    return (
        <Style>
            <h1>ERREUR 404</h1>
            <h2>La page souhaitée est introuvable</h2>
        </Style>
    )
}



const Style = styled.div`

    h1 {
        margin: 30px;
        color: #273036;
    }

    h2 {
        color: #494B4C;
    }

    margin-left: 50px;
    margin-right: 50px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;


export default NotFoundPage;