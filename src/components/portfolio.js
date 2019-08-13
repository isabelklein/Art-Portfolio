import React from 'react';
import Gallery from 'react-photo-gallery';

const photos = [
  { src: '/portfolio/0.jpg', width: 3, height: 4 },
  { src: '/portfolio/1.jpg', width: 3, height: 4 },
  { src: '/portfolio/2.jpg', width: 4, height: 4 },
  { src: '/portfolio/3.jpg', width: 4, height: 4 },
  { src: '/portfolio/4.jpg', width: 4, height: 3 },
  { src: '/portfolio/5.jpg', width: 1, height: 1 },
  { src: '/portfolio/6.jpg', width: 4, height: 3 },
  { src: '/portfolio/7.jpg', width: 1, height: 1 },
  { src: '/portfolio/8.jpg', width: 5, height: 4 },
  { src: '/portfolio/9.jpg', width: 4, height: 3 },
  { src: '/portfolio/10.jpg', width: 2, height: 1 },
  { src: '/portfolio/11.jpg', width: 3, height: 2 },
]

export default class Portfolio extends React.Component {
    render() {
      return (
        <div className="portfolio">
          <Gallery photos={photos} direction="row"/>
        </div>
      )
    }
  }

  