import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './Nav/index';
import Home from './Home/index';


class App extends Component{
  render(){
    return(
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;