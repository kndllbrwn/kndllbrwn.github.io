import React from 'react'
import Title from './Title'

const Experience = React.createClass({
  render () {
    return (
       <div> 
       <Title header="Experience"/>
        {this.props.jobs
            .map((job) => {
              return (
                <ul>
                  <h3>{job.title}</h3>
                  <p><i><a href="{job.link}" target="_blank">{job.company}</a></i>      <span>{job.year}</span></p>
                  {job.description.map((role) => { return <li>{role}</li>})}
                </ul>
              )
        })}
       </div>
    )
  }
})

export default Experience