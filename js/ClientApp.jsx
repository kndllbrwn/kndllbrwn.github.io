import React from 'react';
import ReactDOM from 'react-dom';
import preload from '../public/jobs.json';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlipMove from 'react-flip-move';
import FlipCard from 'react-flipcard';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import '../public/style.css';

import Header from './components/Header';
import Bio from './components/Bio';
import Desktop from './components/Desktop';
import Education from './components/Education';
import Examples from './components/Examples';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Skills from './components/Skills';

const App = React.createClass({
  render() {
    return (
      <Grid fluid>
        <div className="app">
          <BrowserRouter>
            <nav className="nav">
              <Link to="/">
                <i className="fa fa-history" />
                <br/>
                <span className="nav__span">Experience</span>
              </Link>
              <Link to="/examples">
                <i className="fa fa-code" />
                <br/>
                <span className="nav__span">Examples</span>
              </Link>
              <Link to="/education">
                <i className="fa fa-graduation-cap" />
                <br/>
                <span className="nav__span">Education</span>
              </Link>
              <Link to="/skills">
                <i className="fa fa-certificate" />
                <br/>
                <span className="nav__span">Skills</span>
              </Link>
              <Link to="/interests">
                <i className="fa fa-puzzle-piece" />
                <br/>
                <span className="nav__span">Interests</span>
              </Link>
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
              <Route path="/interests" component={Interests} />
            </Switch>
          </BrowserRouter>
        </div>
      </Grid>
    );
  }
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));
