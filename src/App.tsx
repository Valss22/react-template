import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Registration} from "./pages/registration/Registration";
import {Login} from "./pages/login/Login";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/user/register/" component={Registration}/>
        <Route exact path="/user/login/" component={Login}/>
      </Switch>
      <Footer/>
    </div>
  );
}
