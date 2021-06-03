import * as React from 'react';
import styled from 'styled-components';

const ButtonMain = (props) => {
    return (
        <Style>
            <button href="#">{props.title}</button>
        </Style>
    )
}

const Style = styled.div`
    button {
        background: #38b6b2;
        color: white;
        font-weight: bold;
        width: 160px;
        height: 50px;
        border-radius: 8px;
        border: none;
        font-size: 20px;
    }
`;


export default ButtonMain;