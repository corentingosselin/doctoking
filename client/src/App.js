import React from 'react';
import Navbar from './components/global/Navbar';
import GlobalStyle from './css/GlobalStyle';
import LoginPage from 'pages/LoginPage';
import axios from 'axios';
import store from 'redux/store';
import {useHistory} from 'react-router';

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
import { LogoutAuthAction } from 'redux/actions/AuthActions';
import AccountPage from 'pages/AccountPage';
import RequireAuth from 'components/RequireAuth';
import NotFoundPage from 'pages/NotFoundPage';
import BookPage from 'pages/BookPage';
import ConfirmBookPage from 'pages/ConfirmBookPage';
import BookingsPage from 'pages/BookingsPage';
import BookingsDoctorPage from 'pages/BookingsDoctorPage';

function App(props) {
  const { auth, logout } = props;

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

          <Route path="/register-doctor">
            {auth.isLoggedIn ? <Redirect to="/" /> : <RegisterPage role="doctor" />}
          </Route>

          <Route exact path="/doctor/:id" component={BookPage} />
          <Route path="/book" component={RequireAuth(ConfirmBookPage)}/>
          <Route path="/books-doctor" component={RequireAuth(BookingsDoctorPage)}/>
          <Route path="/books" component={RequireAuth(BookingsPage)}/>
          <Route path="/search" component={SearchDoctorPage}/>
          <Route path="/account" component={RequireAuth(AccountPage)}/>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
  );
}

const {dispatch} = store;
axios.interceptors.response.use(null, function(err) {
  if (err.response.status === 401 ) {
    dispatch(LogoutAuthAction());
  }
  return Promise.reject(err);
});


const mapStateToProps = (state) => {
  return {
    auth: state.authState
  };
};




export default connect(mapStateToProps)(App);
