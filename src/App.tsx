import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Registration} from "./registration/ui/component";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Registration}/>
      </Switch>
    </div>
  );
}
