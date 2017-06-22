import React from 'react'
import ReactDOM from 'react-dom'
import preload from '../public/jobs.json'
import { Grid, Row, Col } from 'react-flexbox-grid'

import '../public/style.css'

import Title from './components/Title'
import Header from './components/Header'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Interests from './components/Interests'

const App = React.createClass({
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

              <Experience jobs={preload.jobs} />
            </Col>
            <Col xs={3}>

              <Skills skills={preload.skills} />
              {/* The skill component is breaking layout. Let's see if bootstrap can help
                  <dl>
                  <Title header="Skills"/>
                  <dt>  Front End Development:</dt>
                  <dd>Javascript, React, angularJS, jQuery,
                  HTML, CSS, Meteor, SASS, Materialize</dd>
                  <dt>  Back End Development:</dt>
                  <dd>NodeJS, Ruby on Rails, Meteor,
                  Express, Connect, NPM, Yarn</dd>
                  <dt>  Testing:</dt>
                  <dd>Mocha, Karma</dd>
                  <dt>  Databases</dt>
                  <dd>SQLite, MongoDB, ActiveRecord, Noah, Datatel, Symplicity</dd>
                  <dt>  Content Management Systems: </dt>
                  <dd>WordPress,  Drupal</dd>
                  <dt>  Graphic Design</dt>
                  <dd>Photoshop, Illustrator, Adobe XD</dd>
                </dl> */}
                <Education />
                <Interests />
            </Col>
          </Row>
          {/*<Row>
            <Col xs={6}>
              <Education />
            </Col>
            <Col xs={6}>
              <Interests />

            </Col>
          </Row>*/}
        </div>
      </Grid>

    )
  }
})

ReactDOM.render(React.createElement(App), document.getElementById('app'))
