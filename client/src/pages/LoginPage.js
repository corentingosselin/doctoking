import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LoginAuthAction } from 'redux/actions/AuthActions';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {

  const { login } = props;

  const [loginState, setLoginState] = useState({});
  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: ''
  });


  const history = useHistory();
  function handleLogin(e) {
    e.preventDefault();
    setErrorHandler({ hasError: false, message: "" });
    login(loginState, history, setErrorHandler);
  }


  return (
    <Style>
      <div className="card">

        <div className="content-card">
          <h1>Connexion</h1>
          <div className="authentification">
            <form>

              <div className="flex-column">
                <label>Identifiant ou addresse mail</label>
                <input type="text" placeholder="identifiant" onChange={(event) => {
                  const email = event.target.value;
                  setLoginState({ ...loginState, ...{ email } });
                }} />
              </div>
              <div className="flex-column">
                <label>Mot de passe</label>
                <input type="password" placeholder="Mot de passe" onChange={(event) => {
                  const password = event.target.value;
                  setLoginState({ ...loginState, ...{ password } });
                }} />
              </div>
            </form>
          </div>
          {
            errorHandler.hasError &&
            <p className="error">{errorHandler.message}</p>
          }

          <Link className="link" id="no-account" to="/register">
            Je n'ai pas de compte
          </Link>

          <button className="connection" onClick={handleLogin}>connexion</button>

        </div>
      </div>
    </Style>

  )
}



const Style = styled.div`

      #no-account {
        font-size: 12px;
        text-decoration: underline;
        color: darkgray;
        
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a {
        text-decoration: none;
        color: #000;
      }

      h1 {
        text-align: center;
      }

  

      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 500px;
        margin: 50px;
      }

      .content-card {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }

      

      .authentification {
        margin: 30px;
      }

      form {
        display: flex;
        flex-direction: column;
      }


      .connection {
        background: #38b6b2;
        color: white;
        font-weight: bold;
        height: 55px;
        border-radius: 8px;
        border: none;
        font-size: 20px;
        width:200px;
        margin: 20px;
      }
      
`;


const mapStateToProps = (state) => {
  return {
    user: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState, history, setErrorHandler) => {
      dispatch(LoginAuthAction(loginState, history, setErrorHandler));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);