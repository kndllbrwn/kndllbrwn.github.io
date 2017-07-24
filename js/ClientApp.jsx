import React from 'react';
import ReactDOM from 'react-dom';
import preload from '../public/jobs.json';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlipCard from 'react-flipcard';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import '../public/style.css';

import Header from './components/Header';
import Bio from './components/Bio';
import Desktop from './components/Desktop';
import Education from './components/Education';
import Examples from './components/Examples';
import Experience from './components/Experience';
import Feedback from './components/Feedback';
import Interests from './components/Interests';
import Skills from './components/Skills';

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
      <Grid fluid>
        <BrowserRouter>
          <div>
            <div className="app">
              <nav className="nav">
                <NavLink exact to="/">
                  <i className="fa fa-briefcase" />
                  <br />
                  <span className="nav__span">Experience</span>
                </NavLink>
                <NavLink to="/examples">
                  <i className="fa fa-code" />
                  <br />
                  <span className="nav__span">Examples</span>
                </NavLink>
                <NavLink to="/education">
                  <i className="fa fa-graduation-cap" />
                  <br />
                  <span className="nav__span">Education</span>
                </NavLink>
                <NavLink to="/skills">
                  <i className="fa fa-certificate" />
                  <br />
                  <span className="nav__span">Skills</span>
                </NavLink>
                <NavLink to="/feedback">
                  <i className="fa fa-commenting" />
                  <br />
                  <span className="nav__span">Feedback</span>
                </NavLink>
              </nav>
              <Row>
                <Col xs={12}>
                  <Header />
                  <Bio />
                </Col>
              </Row>
              <Switch>
                <Route exact path="/" component={props => <Experience jobs={preload.jobs} {...props} />} />
                <Route path="/examples" component={props => <Examples projects={preload.projects} {...props} />} />
                <Route path="/education" component={Education} />
                <Route path="/skills" component={props => <Skills skills={preload.skills} {...props} />} />
                <Route path="/feedback" component={props => <Feedback feedback={preload.feedback} {...props} />} />
              </Switch>
            </div>
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
                          See Projects
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
                    <Feedback feedback={preload.feedback}/>
                  </Col>
                  <Col xs={3}>
                    <Skills skills={preload.skills} />
                    <Education />
                    <Interests />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Grid>
    );
  }
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));
