import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../imgs/logo.svg';
import image from '../imgs/logo_test.png'; 

const HomePage = () => {

    return (
        <Style>
           
            <img src={image} id="main-logo"/>
        </Style>
    )
}



const Style = styled.div`

    #main-logo {
        width:1000px;
        height: auto;
    }
      
`;


export default HomePage;