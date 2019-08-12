import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

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
    constructor() {
      super();
      this.state = { currentImage: 0 };
      this.closeLightbox = this.closeLightbox.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true,
      });
    }
    closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
      });
    }
    gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
    gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
    render() {
      return (
        <div>
          <Gallery photos={photos} onClick={this.openLightbox} />
          {/* <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          /> */}
        </div>
      )
    }
  }

  