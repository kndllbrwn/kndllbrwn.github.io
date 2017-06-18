import React from 'react'
import ReactDOM from 'react-dom'
import preload from '../public/jobs.json'

import '../public/style.css'

import Title from './Title'
import Experience from './Experience'

const App = React.createClass({
  render(){
    return (
      <div>
        <header>
          <h1>Kendall L. Brown, ICP-PRG</h1>  
          <aside>
            <ul>
              <li><a href="mailto:kndllbrwn1914@gmail.com"><i className="fa fa-envelope"></i>kndllbrwn1914@gmail</a> </li>
              <li><a href="https://www.linkedin.com/in/KndllBrwn" target="_blank"><i className="fa fa-linkedin-square"></i>KndllBrwn</a> </li>
              <li><a href="https://github.com/kndllbrwn" target="_blank"><i className="fa fa-github"></i>kndllbrwn</a></li>
              <li><a href="https://www.kb3itsolutions.com" target="_blank"><i className="fa fa-laptop"></i>Past Website</a></li>
            </ul>
          </aside>
        </header>
        
        <hr/>
        <blockquote>I am a full-stack developer with a long history of providing IT solutions to improve the relationships between clients and end-users. This takes the form of being an advocate for User Experience and best practices in modern development.</blockquote>
        <hr/>
        <div className="flex-container">
          <section className="flex-item1">
            <Experience jobs={preload.jobs}/>
          </section>
          <section className="flex-item2">
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

            <dl>
              <Title header="Education"/>
              <dt>  General Assembly</dt>
              <dd>Graduate, UX Day Camp</dd>
              <dt>  Pennsylvania State University </dt>
              <dd>B.A., Sociology</dd>
              <dd>Minor degree, Information Science and Statistical Analysis</dd>
            </dl>
            <div id="Interests">
              <ul>
                <Title header="Interests & Activities"/>
                <li>Volunteerism and change management(President of Penn State Alumni AIG)</li>
                <li>  Consumer advocacy and education awareness</li>
                <li>Health and fitness enthusiast</li>
              </ul>
            </div>
          </section>  
        </div> 
      </div>
      
    )
  }
})

ReactDOM.render(React.createElement(App), document.getElementById('app'))