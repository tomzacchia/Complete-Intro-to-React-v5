/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    activeIndex: 0,
  };

  // we can perform transformations on incoming props
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    // return object is merged with state
    return { photos };
  }

  // the click event trigger handleIndexClick as a callback
  // if handlers are not arrow functions we lost this context
  handleIndexClick = (index) => {
    this.setState({ activeIndex: parseInt(index) });
  };

  render() {
    const { photos, activeIndex } = this.state;

    return (
      <div className="carousel">
        <img src={photos[activeIndex]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              onClick={() => {
                this.handleIndexClick(index);
              }}
              data-index={index}
              className={index === activeIndex ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
