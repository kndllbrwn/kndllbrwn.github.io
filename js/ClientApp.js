import React from 'react'
import ReactDOM from 'react-dom'
import preload from '../public/jobs.json'

import '../public/style.css'

import Title from './Title'
import Header from './Header'
import Bio from './Bio'
import Experience from './Experience'
import Skills from './Skills'
import Education from './Education'
import Interests from './Interests'

const App = React.createClass({
  render(){
    return (
      <div>
        <Header/>
        <Bio/>
        <div className="flex-container">
          <section className="flex-item1">
            <Experience jobs={preload.jobs}/>
          </section>
          <section className="flex-item2">
          <Skills skills={preload.skills}/>
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
            </dl>  
            <Education/>      
            <Interests/>
          </section>  
        </div> 
      </div>
      
    )
  }
})

ReactDOM.render(React.createElement(App), document.getElementById('app'))