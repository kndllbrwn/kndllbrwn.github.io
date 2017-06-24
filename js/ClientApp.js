import React from 'react'
import ReactDOM from 'react-dom'
import preload from '../public/jobs.json'
import { Grid, Row, Col } from 'react-flexbox-grid'

import '../public/style.css'


import Header from './components/Header'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Interests from './components/Interests'
import Carousel from './components/Slider'

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
              {/*<Carousel />*/}
              <Experience jobs={preload.jobs} />
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
