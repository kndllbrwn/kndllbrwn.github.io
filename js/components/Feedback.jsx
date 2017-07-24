import React from 'react';
import Slider from 'react-slick';
import Title from './Title';


const Feedback = React.createClass({
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
      <div className="componentBody">
        <Title header="Feedback" />
        
                      
              <Slider {...settings}>
              {this.props.feedback.map(feedback => {
          return (
                    
                      <div key={feedback.comment}>
                        <p className="feedback__p">
                          <blockqoute>
                          <i className="fa fa-quote-left"></i> {feedback.comment} <i className="fa fa-quote-right"></i>
                          </blockqoute>
                        </p>
                        <br/>
                        <i className="fa fa-user" />
                        <strong>
                          -{feedback.role} ({feedback.organization})
                        </strong>
                      </div>                    
                                       
                   );
                })}
              </Slider>
            
         
      </div>
    );
  }
});

export default Feedback;
