import React from 'react';
import '../App.css';
import Headshot from '../headshot.jpg'

export default class About extends React.Component {
    render() {
        return (
            <div className="headshot">
                <img src={Headshot} className="headshot" alt="" />
                <div className="about-text-header">
                    Hi, I'm Isabel.
              <div className="about-text">
                        I'm a student-athlete at the University of Washington pursuing a B.S. in Human Centered Design and Engineering with interest in UX and interaction design.
                        In 2017 I fully hand-illustrated one 32-page children's book, Bella Bella Brush by author Tamara Tobias, and in 2019 I am working on a second book.
                        I am always looking to expand my experiences whether it is through more illustration, traditional art, graphic design, or UX design.
                        Please feel free to reach out at isabelmklein@outlook.com.
                </div>
                    <div className="headshot-border"></div>
                </div>
            </div>
        )
    }
}