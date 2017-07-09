import preload from '../../public/jobs.json';
import React from 'react';
import Slider from 'react-slick';

import Experience from './Experience';
import Examples from './Examples';

const Carousel = React.createClass({
  render() {
    var settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 1,
      speed: 500
      /* leaving for mobile slider inspiration
     vertical: true,
      verticalSwiping: true */
    };
    return (
      <Slider {...settings}>
        <div>
          <Experience jobs={preload.jobs} />
        </div>
        <div>
          <Examples projects={preload.projects} />
        </div>
      </Slider>
    );
  }
});

export default Carousel;
