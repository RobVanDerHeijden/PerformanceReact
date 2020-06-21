import React from 'react';
import logo from './lol-icon.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Teams from './Teams/Teams';
import Team from './Teams/Team';
import AddTeam from './Teams/AddTeam';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <p>Tired of losing gamesbefore they started?</p> 
      <p>Come join us on Drafter and improve your draft!</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <h1 className="header-logo-name">Welcome to Drafter</h1>
          <nav className="RobsCooleNavbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="nav-about"><Link to="/about">About</Link></li>
              <li><Link to="/teams" >Teams</Link></li>
            </ul>
          </nav>
          <div className="main-body">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/teams" component={Teams} />
              <Route path='/teams/:teamid' component={Team} />
              <Route path='/addteam' component={AddTeam} />
              <Route path='/test' render={() => { return (<h1> testpage </h1>) }}/>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
