import React from 'react'
import ReactDOM from 'react-dom'

import '../public/style.css'

import Title from './Title'

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
            <Title header="Experience"/> 
            <ul>
              <h3>Engineer/Consultant</h3>
              <p><i><a href="https://www.boozallen.com/" target="_blank">Booz Allen Hamilton</a></i>      <span>June 2016 - Present</span></p>
              <li>  Create technical documentation for client and consultants on project </li>
              <li>  Log bugs in production code</li>
              <li>  Review code against style guide for compliance.</li>
              <li>  Update production code for client</li>
              <li>  Conduct 508 compliance tests on static files</li>
              <li>  Assist with IRS with transformation migration of largest federal website in history</li>
            </ul>
            <br/>
            <ul>
              <h3>Freelance Developer</h3>
              <p><i>International Traveler Assurance, Phi Beta Sigma</i>      <span>06/15 – 06/16</span></p>
              <li>  Created custom HTML, CSS, and JavaScript for clients</li>
              <li>  Generated database of alumni brothers stored in a JSON file</li>
              <li>  Developed searchable application of brothers using MVC framework/Angular application pulling from JSON file</li>
            </ul>
            <br/>
            <ul>
              <h3>Manager of Web Technologies (Contract)</h3>
              <p><i><a href="www.hearingloss.org/" target="_blank">Hearing Loss Association of America</a></i>    <span>11/15 – 12/15</span></p>
              <li>  Created and updated pages for website with over 500,000 annual visitors</li>
              <li>  Created several html email campaigns messaging thousands of members and constituents</li>
              <li>  Reported Google Analytics on site metrics and email campaigns to advertisers</li>
              <li>  Utilized Adobe Photoshop to create new slide for Association homepage</li>
            </ul>
            <br/>
            <ul>
              <h3>Resources Coordinator</h3>
              <p><i><a href="https://www.wcl.american.edu/career/" target="_blank">American University Washington College of Law</a></i>    <span>05/14 – 11/15</span></p>
              <li>  Designed front-end content for Office of Career & Professional Development</li>
              <li>  Assisted internal stakeholders with modernization of pages by improving UX, IA, and content design decisions</li>
              <li>  Drafted messaging content and pages for highly public office campaigns </li>
            </ul>
            <br/>
            <ul>
              <h3>Program Assistant</h3>
              <p><i><a href="www.apsanet.org/" target="_blank">American Political Science Association</a></i><span>03/12 – 11/13</span></p>
              <li>  Created and maintained pages for largest political science association in U.S.</li>
              <li>  Drafted HTML email campaigns </li>
              <li>  Managed APSA Mentorship program including recruitment, matching, surveying, and evaluations</li>
              <li>  Increased mentoring matches by 100%</li>
              <li>  Developed and managed annual database for select departmental programs</li>
            </ul>
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