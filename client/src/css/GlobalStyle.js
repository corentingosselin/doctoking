import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    h1 {
        color: #38b6b2
    }

    label {
        color: #38b6b2;
        padding: 10px;
        padding-left: 5px;
        
    }

    input {
        border: 2px solid #38b6b2;
        border-radius: 20px;
        padding: 5px;
        padding-left: 10px;
        width: 200px;
        height: 30px;
        color: gray;
        outline: none;
    }

    select {
        border: 2px solid #38b6b2;
        border-radius: 20px;
        padding: 5px;
        padding-left: 10px;
        width: 200px;
        height: 30px;
        color: gray;
        outline: none;
    }

    input::-webkit-input-placeholder {
     opacity: 0.5; 
    }
    
    option::-webkit-input-placeholder {
     opacity: 0.5; 
    }

    .error {
        color: red;
      }
   
`;

export default GlobalStyle;