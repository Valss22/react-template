import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Registration} from "./pages/registration/registration";
import {Login} from "./pages/login/login";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/user/register/" component={Registration}/>
        <Route exact path="/user/login/" component={Login}/>
      </Switch>
    </div>
  );
}
