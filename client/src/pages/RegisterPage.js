import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RegisterAuthAction } from 'redux/actions/AuthActions';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const RegisterPage = (props) => {

  const { user, register } = props;
  const [userState, setUserState] = useState({
    gender: "male"
  });
  const history = useHistory();
  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: ''
  });

  function handleRegister(e) {
    e.preventDefault();
    // @ts-ignore
    register(userState, history, setErrorHandler)
  }

  return (
    <Style>
      <div className="card">

        <div className="content-card">
          <h1>Inscription</h1>
          <div className="authentification">
            <form>

              <div className="fields">
                <div className="part">


                  <div className="flex-column">
                    <label>Addresse email</label>
                    <input type="email" placeholder="addresse email"
                      onChange={(event) => {
                        const email = event.target.value;
                        setUserState({ ...userState, ...{ email } });
                      }} />

                    <label>Nom</label>
                    <input type="text"
                      placeholder="nom"
                      onChange={(event) => {
                        const last_name = event.target.value;
                        setUserState({ ...userState, ...{ last_name } });
                      }} />

                    <label>Prénom</label>
                    <input type="text" placeholder="prénom" onChange={(event) => {
                      const first_name = event.target.value;
                      setUserState({ ...userState, ...{ first_name } });
                    }} />

                    <label>Genre</label>
                    <select name="Genre"
                      onChange={(event) => {
                        const gender = event.target.value;
                        setUserState({ ...userState, ...{ gender } });
                      }} >
                      <option value="male">Homme</option>
                      <option value="female">Femme</option>
                    </select>

                    <label>Âge</label>
                    <input type="number" placeholder="âge" min="18" max="100"
                      onChange={(event) => {
                        const age = event.target.value;
                        setUserState({ ...userState, ...{ age } });
                      }} />
                  </div>
                </div>

                <div className="part">

                  <div className="flex-column">
                    <label>Ville</label>
                    <input type="text" placeholder="ville"
                      onChange={(event) => {
                        const city = event.target.value;
                        setUserState({ ...userState, ...{ city } });
                      }} />

                    <label>Addresse</label>
                    <input type="text" placeholder="addresse"
                      onChange={(event) => {
                        const address = event.target.value;
                        setUserState({ ...userState, ...{ address } });
                      }} />

                    <label>Téléphone portable</label>
                    <input type="tel" placeholder="téléphone portable"
                      onChange={(event) => {
                        const phone = event.target.value;
                        setUserState({ ...userState, ...{ phone } });
                      }} />

                    <label>Mot de passe</label>
                    <input type="password" placeholder="mot de passe"
                      onChange={(event) => {
                        const password = event.target.value;
                        setUserState({ ...userState, ...{ password } });
                      }} />

                    <label>Confirmation mot de passe</label>
                    <input type="password" placeholder="confirmation mot de passe" onChange={(event) => {
                      const confirm_password = event.target.value;
                      setUserState({ ...userState, ...{ confirm_password } });
                    }} />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {
            errorHandler.hasError &&
            <p className="error">{errorHandler.message}</p>
          }

          <Link className="link" id="have-account" to="/login">
            Je déjà un compte
          </Link>
          <button onClick={handleRegister}>inscription</button>

        </div>
      </div>
      <Toaster />
    </Style >

  )
}



const Style = styled.div`

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a {
        text-decoration: none;
        color: #000;
      }

      #have-account {
        font-size: 12px;
        text-decoration: underline;
        color: darkgray;
        
      }

      h1 {
        text-align: center;
      }

      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 900px;
        margin: 50px;
      }

      .fields {
        display: flex;
        flex-direction: row;
        
      }

      .part {
        margin: 60px;
        display:flex;
        flex-direction: column;
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


      button {
        background: #38b6b2;
        color: white;
        font-weight: bold;
        height: 55px;
        border-radius: 8px;
        border: none;
        font-size: 20px;
        width:250px;
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
    register: (userState, history, setErrorHandler) => {
      dispatch(RegisterAuthAction(userState, history, setErrorHandler));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);