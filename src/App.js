import React from 'react';
import './App.css';
import Portfolio from './components/portfolio';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import About from './components/about';

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="top-border"></div>
        <header className="App-header">Isabel Klein
          <div className="description">
            artist and illustrator
            <Link to="/work"> <button className="navigation-work">WORK</button></Link>
            <Link to ="/about"> <button className="navigation-about">ABOUT</button></Link>
            <button className="navigation-contact">CONTACT</button>
          </div>
        </header>
      
      <Switch>
      <Route path="/work" exact component={Portfolio} />
      <Route path="/about" exact component={About} />
      </Switch>
      </div>
      </Router>
    );
  }
}


export default App;
