import React from 'react'
import Slider from 'react-slick'

const Carousel = React.createClass({
  render(){
    var settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500
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