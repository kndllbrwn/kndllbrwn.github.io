import React from 'react';
import ReactDOM from 'react-dom';
import preload from '../../public/jobs.json';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlipCard from 'react-flipcard';

import Header from './Header';
import Bio from './Bio';
import Education from './Education';
import Examples from './Examples';
import Experience from './Experience';
import Interests from './Interests';
import Skills from './Skills';

const App = React.createClass({
  getInitialState() {
    return {
      isFlipped: false
    };
  },

  showBack() {
    this.setState({
      isFlipped: true
    });
  },

  showFront() {
    this.setState({
      isFlipped: false
    });
  },

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  },

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  },
  render() {
    return (
      <div id="desktop">
        <Row>
          <Col xs={12}>
            <Header />
            <Bio />
          </Col>
        </Row>

        <div className="flex-container">
          <Row>
            <Col xs={9}>
              <FlipCard
                disabled={true}
                flipped={this.state.isFlipped}
                onFlip={this.handleOnFlip}
                onKeyDown={this.handleKeyDown}
              >
                <div className="flipCard_div">
                  <button className="flipCard_button" type="button" onClick={this.showBack}>
                    See<br />Examples
                  </button>
                  <Experience jobs={preload.jobs} />
                </div>
                <div className="flipCard_div">
                  <button className="flipCard_button" type="button" ref="backButton" onClick={this.showFront}>
                    See<br />Experience
                  </button>
                  <Examples projects={preload.projects} />
                </div>
              </FlipCard>
            </Col>
            <Col xs={3}>
              <Skills skills={preload.skills} />
              <Education />
              <Interests />
            </Col>
          </Row>
          {/* <Row>
            <Col xs={6}>
              <Education />
            </Col>
            <Col xs={6}>
              <Interests />

            </Col>
          </Row> */}
        </div>
      </div>
    );
  }
});
