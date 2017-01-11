import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import AdminPage from './components/admin/AdminPage';
import ProtectedPage from './components/protected/ProtectedPage';
import AboutPage from './components/about/AboutPage';
import LoginPage from './components/login/LoginPage'; //eslint-disable-line import/no-named-as-default
import RegistrationPage from './components/registration/RegistrationPage'; //eslint-disable-line import/no-named-as-default
import {requireAdmin} from './actions/authActions';

import HousePage from './components/house/house_new';


export default function Routes(store) {


  const checkAdmin = (nextState, replace, callback) => {
    store.dispatch(requireAdmin(nextState, replace, callback));
  };

  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="protected" component={ProtectedPage}/>
      <Route path="admin" component={AdminPage} onEnter={checkAdmin}/>
      <Route path="register" component={RegistrationPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="d2d" component={HousePage}/>
    </Route>
  );
}
