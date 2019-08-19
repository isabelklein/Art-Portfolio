import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from './components/container';

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
            <Link to="/work"> <button className="navigation" style={{ top: "150px" }}>WORK</button></Link>
              <Link to="/about"> <button className="navigation" style={{ top: "180px" }}>ABOUT</button></Link>
              <Link to="/contact"> <button className="navigation" style={{ top: "210px" }}>CONTACT</button></Link>
            </div>
          </header>
          <div className="Portfolio"></div>
          <Container />
        </div>
      </Router>
    );
  }
}


export default App;
