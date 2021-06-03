import React from 'react';
import Navbar from './components/global/Navbar';
import GlobalStyle from './css/GlobalStyle';
import LoginPage from 'pages/LoginPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import HomePage from 'pages/HomePage';
import SearchDoctorPage from 'pages/SearchDoctorPage';
import RegisterPage from 'pages/RegisterPage';
import { connect } from 'react-redux';

function App(props) {
  const { auth } = props;

  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/login">
            {auth.isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
          </Route>

          <Route path="/register">
            {auth.isLoggedIn ? <Redirect to="/" /> : <RegisterPage />}
          </Route>

          <Route path="/search">
            {auth.isLoggedIn ? <SearchDoctorPage /> : <Redirect to="/login" />}

          </Route>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.authState
  };
};


export default connect(mapStateToProps)(App);
