import React from 'react'
import Title from './Title'
import Skillset from './Skillset'

const Skills = React.createClass({
  render () {
    return (
       <div> 
       <Title header="Experience"/>
        {this.props.skills
            .map((skill) => {
              return (
                <dl>
                  <dt>  Front End Development:</dt>
                  <dd>Javascript, React, angularJS, jQuery, 
                  HTML, CSS, Meteor, SASS, Materialize</dd>
                </dl>
              )
        })}
       </div>
    )
  }
})

export default Skills