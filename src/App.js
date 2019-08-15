import React, {Component} from 'react';
//import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layouts/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'


class App extends Component{
  render () {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hello World
        </a>
      </header>
    </div>
  );
}*/

export default App;
