import React from 'react'

const Project = React.createClass({
  render () {
    const { title, about, company, link, year, description} = this.props
    return (
      <ul className='position'>
        <h3>{title}</h3>
        <details>
          <summary>Description</summary>
          {about}
        </details>
        <p><i><a href={link} target='_blank'>{company}</a></i>                                                                  <span>{year}</span></p>
        
      </ul>
    )
  }
})

export default Project
