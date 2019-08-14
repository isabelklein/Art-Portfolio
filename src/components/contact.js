import React from 'react';
import '../App.css';

export default class About extends React.Component {
    render() {
        return (
            <div className="about-text-header" style={{ marginTop: "250px" }}>
                Please feel free to reach out.
              <div className="about-text" style={{ marginTop: "10px" }}>
                    Email: isabelmklein@outlook.com
                        <a className="about-text"
                        href="https://www.linkedin.com/in/isabelmklein/"
                        target="_Blank"
                        rel="noopener noreferrer"
                        style={{ opacity: 0.5, position: "fixed", bottom: "50px", textDecoration: "none" }}>
                        LinkedIn
                        </a>
                    <a className="about-text"
                        href="https://github.com/isabelklein/Art-Portfolio"
                        target="_Blank"
                        rel="noopener noreferrer"
                        style={{ opacity: 0.5, position: "fixed", bottom: "25px", textDecoration: "none" }}>
                        I created this site using ReactJS. See it on GitHub
                        </a>
                </div>
            </div>
            // </div>
        )
    }
}