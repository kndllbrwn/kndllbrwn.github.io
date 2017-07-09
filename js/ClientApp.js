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
import Carousel from './components/Slider';
import Education from './components/Education';
import Examples from './components/Examples';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Skills from './components/Skills';

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <Grid fluid>
          <nav className="nav">
            <Link to="/">
              <i className="fa fa-history" />
            </Link>
            <Link to="/examples">
              <i className="fa fa-code" />
            </Link>
            <Link to="/education">
              <i className="fa fa-graduation-cap" />
            </Link>
            <Link to="/skills">
              <i className="fa fa-certificate" />
            </Link>
            <Link to="/interests">
              <i className="fa fa-puzzle-piece" />
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
        </Grid>
      </BrowserRouter>
    );
  }
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));
