import React from 'react'
import Title from './Title'
import Skillset from './Skillset'

const Skills = React.createClass({
  render () {
    return (
       <div> 
       <Title header="Skills"/>
        {this.props.skills
            .map((skillset) => {
              return (
                <dl>
                  <dt>  {skillset.skill}:</dt>
                  <dd>{skillset.list.map((role) => { return <li className="skill">{role}</li>})}</dd>
                </dl>
              )
        })}
       </div>
    )
  }
})

export default Skills