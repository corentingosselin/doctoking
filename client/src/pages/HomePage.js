import React from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../imgs/logo.svg';

const HomePage = () => {

    return (
        <Style>
            <Logo id="main-logo"/>
            <Toaster />
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