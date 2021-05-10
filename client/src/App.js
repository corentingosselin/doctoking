import './css/App.css';
import * as React from "react";
import { ReactComponent as Logo } from './logo_DoctoKing.svg';
import { Switch, Route, Link } from 'react-router-dom'
import Authentication from './pages/Authentication';
import Nav from "./components/nav";
import Subscribe from "./pages/Subscribe";
import About from "./pages/About";
import Search from "./pages/Search";
import Appointment from "./pages/Appointment";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Create_account_med from "./pages/Create_account_med";
import Manage_account from "./pages/Manage_account";
import Search_medic from "./components/Search_medic";
import Search_admin from "./components/Search_admin";
import Search_pat from "./components/Search_pat";
import Search_result from "./pages/Search_result";
import My_appointment from "./pages/My_appointment";
import Me from "./pages/Me";
import Result_patient from "./pages/Result_patient";
import Result_med from "./pages/Result_med";
import Create_account_pat from "./pages/Create_account_pat";
import Doctor_card from "./pages/Doctor_card";
function App() {
  return (
<div>
      <Nav />
      <Switch>
          <div>
              <Route path='/about'>
                  <About />
              </Route>
              <Route path='/subscribe'>
                  <Subscribe />
              </Route>
              <Route path='/authentication'>
                  <Authentication />
              </Route>
              <Route path='/search'>
                  <Search />
              </Route>
              <Route path='/appointment'>
                    <Appointment />
              </Route>
              <Route path='/admin'>
                  <Admin />
              </Route>
              <Route path='/home'>
                  <Home />
              </Route>
              <Route path='/manage'>
                  <Manage />
              </Route>
              <Route path='/create_account_med'>
                  <Create_account_med />
              </Route>
              <Route path='/create_account_pat'>
                  <Create_account_pat />
              </Route>
              <Route path='/manage_account'>
                  <Manage_account/>
              </Route>
              <Route path='/manage_account/search_medic'>
                  <Search_medic/>
              </Route>
              <Route path='/manage_account/search_pat'>
                  <Search_pat/>
              </Route>
              <Route path='/manage_account/search_admin'>
                  <Search_admin/>
              </Route>
              <Route path='/search_result'>
                  <Search_result/>
              </Route>
              <Route path='/my_appointment'>
                  <My_appointment/>
              </Route>
              <Route path='/me'>
                  <Me/>
              </Route>
              <Route path='/result_patient'>
                  <Result_patient/>
              </Route>
              <Route path='/result_med'>
                  <Result_med/>
              </Route>
              <Route path='/doctor_card'>
                  <Doctor_card/>
              </Route>

          </div>
      </Switch>
</div>
  );

}

export default App;
