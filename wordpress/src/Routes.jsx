import { Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./components/login/Login";
import Register from "./components/RegisterForm/Register";
import Home from "./components/Home/Home";
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/Faq';
import Sidebar from "./components/Sidebar/Sidebar";
import MyProfile from "./components/Myprofile/MyProfile";
import Editprofile from "./components/Editprofile/Editprofile";

export const Routes = () => {
  return <Switch>
    <Route path='/login' exact component={Login} />
    <Route path='/register' exact component={Register} />
    <Route path='/sidebar' exact component={Sidebar} />
    <Route path='/faq' exact component={FAQ} />
    <Route path='/myprofile' exact component={MyProfile}/>
    <Route path='/editprofile' exact component={Editprofile} />
    

  </Switch>;
};


