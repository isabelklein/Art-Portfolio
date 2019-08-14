import React from 'react';
import './App.css';
import Portfolio from './components/portfolio';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './components/about';
import Contact from './components/contact';

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
            <Link to ="/work"> <button className="navigation" style={{top:"170px"}}>WORK</button></Link>
            <Link to ="/about"> <button className="navigation" style= {{top:"200px"}}>ABOUT</button></Link>
            <Link to ="/contact"> <button className="navigation" style={{top:"230px"}}>CONTACT</button></Link>
          </div>
        </header>
      
      <Switch>
      <Route path="/work" exact component={Portfolio} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      </Switch>
      </div>
      </Router>
    );
  }
}


export default App;
