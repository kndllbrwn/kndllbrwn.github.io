import React from 'react'
import Title from './Title'
import Position from './Position'

const Projects = React.createClass({
  render () {
    return (
      <div>
        <Title header='Experience' />
        {this.props.jobs
            .map((job) => {
              return (
                <Position key={job.company} {...job} />
              )
            })}
      </div>
    )
  }
})

export default Projects
