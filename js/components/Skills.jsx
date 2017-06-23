import React from 'react'
import Title from './Title'

const Skills = React.createClass({
  render () {
    return (
      <div>
        <Title header='Skills' />
        {this.props.skills
            .map((skillset) => {
              return (
                <dl key={skillset.skill}>
                  <dt><strong>{skillset.skill}</strong></dt>
                  <dd>{skillset.list.map((role) => { return <span key={role} className='skill'>{role}<wbr /></span> })}</dd>
                </dl>
              )
            })}
      </div>
    )
  }
})

export default Skills
