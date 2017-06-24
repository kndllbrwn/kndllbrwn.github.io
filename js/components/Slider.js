import React from 'react'
import Slider from 'react-slick'

const Carousel = React.createClass({
  render(){
    var settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      slidesToShow:1,
      speed: 500
     /* leaving for mobile slider inspiration
     vertical: true,
      verticalSwiping: true */
    };
    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
})

export default Carousel