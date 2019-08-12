import React from 'react';
import './App.css';
import Portfolio from './components/portfolio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="top-border"></div>
        <header className="App-header">Isabel Klein
          <div className="description">
          artist and illustrator
          </div>
        </header>
      <div className="portfolio">
      <Portfolio />
      </div>
      </div>
    );
  }
}


export default App;
