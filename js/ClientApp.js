import React from 'react'
import ReactDOM from 'react-dom'
import preload from '../public/jobs.json'
import { Grid, Row, Col } from 'react-flexbox-grid'
import FlipMove from 'react-flip-move'
import FlipCard from 'react-flipcard'

import '../public/style.css'


import Header from './components/Header'
import Bio from './components/Bio'
import Carousel from './components/Slider'
import Education from './components/Education'
import Examples from './components/Examples'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Skills from './components/Skills'
 
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
  render () {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Header />
            <Bio />
          </Col>
        </Row>

        <div className='flex-container'>
          <Row>
            <Col xs={9}>
              {/*{<Carousel />
              <Experience jobs={preload.jobs} />
              <Examples projects={preload.projects} />*/}
              <FlipCard
                disabled={true}
                flipped={this.state.isFlipped}
                onFlip={this.handleOnFlip}
                onKeyDown={this.handleKeyDown}
              >
                <div className="flipCard_div">
                  
                  <button className="flipCard_button" type="button" onClick={this.showBack}>Examples</button>
                   <Experience jobs={preload.jobs} /> 
                </div>
                <div className="flipCard_div">
                  <button className="flipCard_button" type="button" ref="backButton" onClick={this.showFront}>Experience</button>
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
      </Grid>

    )
  }
})

ReactDOM.render(React.createElement(App), document.getElementById('app'))