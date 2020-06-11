import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Client from './pages/NewClient'
import Negotiation from './pages/Negotiation'
import NewTask from './pages/NewTask'
import NewValue from './pages/NewValue'
import FinishTask from './pages/FinishTask'
import Win from './pages/Win'
import History from './pages/History'
import Key from './pages/Key/index'

export class Routes extends Component {
  render() {
      return (
     <BrowserRouter>
      <Switch>
        <Route path="/" exact       component={Key}/>
        <Route path="/home"         component={Home}/>
        <Route path="/new-client"   component={Client}/>
        <Route path="/negotiation"  component={Negotiation}/>
        <Route path="/new-task"     component={NewTask}/>
        <Route path="/new-value"    component={NewValue}/>
        <Route path="/finish-Task"  component={FinishTask}/>
        <Route path="/win"          component={Win}/>
        <Route path="/history"      component={History}/>
      </Switch>
     </BrowserRouter>
      )
    }
};
export default Routes;