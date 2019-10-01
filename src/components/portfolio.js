import React from 'react';
import Lightbox from 'react-image-lightbox';
import '../style.css';

var images = [
  { name: "0", alt: "" },
  { name: "1", alt: "" },
  { name: "2", alt: "" },
  { name: "3", alt: "" },
  { name: "4", alt: "" },
  { name: "5", alt: "" },
  { name: "6", alt: "" },
  { name: "7", alt: "" },
  { name: "8", alt: "" },
  { name: "9", alt: "" },
  { name: "10", alt: "" },
  { name: "11", alt: "" },
  { name: "12", alt: "" },
  { name: "13", alt: "" },
  { name: "14", alt: "" },
  { name: "15", alt: "" },
  { name: "16", alt: "" },
  { name: "17", alt: "" },
  { name: "18", alt: "" },
  { name: "19", alt: "" },
  { name: "20", alt: "" },
  { name: "21", alt: "" }
]


export default class Portfolio extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  }

  // To make 3 columns:
  //    var allImages = [first, second, third] 
  //    var index = Math.round(images.length / 3)
  //    var third = images.slice(index * 2, images.length)

  render() {
    const { photoIndex, isOpen } = this.state;
    var index = Math.round(images.length / 2)
    var first = images.slice(0, index)
    var second = images.slice(index, index * 2)

    var allImages = [first, second]
    return (
      <div class="row">
        {allImages.map(imgs=>{
          return <div class="column">
            {imgs.map((image,i) => {
              return (<img src={process.env.PUBLIC_URL + "./portfolio/" + image.name + ".jpg"} alt=""
                onClick={() => this.setState({ isOpen: true, photoIndex: 
                  images.findIndex(img=>img.name===image.name) })}>
              </img>)
            })}
          </div>
        })}

        <div>
          {isOpen && (
            <Lightbox
              mainSrc={process.env.PUBLIC_URL + "/portfolio/" + images[photoIndex].name + ".jpg"}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
          </div>
        </div>
        );
      }
    }
        