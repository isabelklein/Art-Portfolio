import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from './components/container';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="top-border"></div>
          <header className="App-header">Isabel Klein
          <div className="description">
              artist and illustrator
            <Link to= {process.env.PUBLIC_URL + "/"}> <button className="navigation" style={{ top: "150px" }}>WORK</button></Link>
              <Link to= {process.env.PUBLIC_URL + "/about"}> <button className="navigation" style={{ top: "180px" }}>ABOUT</button></Link>
              <Link to= {process.env.PUBLIC_URL + "/contact"}> <button className="navigation" style={{ top: "210px" }}>CONTACT</button></Link>
            </div>
          </header>
          <Container />
        </div>
      </Router>
    );
  }
}


export default App;
