import React from 'react'

const Position = React.createClass({
  render () {
    const { title, company, link, year, description} = this.props
    return (
      <ul className='position'>
        <h3>{title}</h3>
        {/*<details>
          <summary>Desc</summary>
          fsdfdfdf
        </details>*/}
        <p><i><a href={link} target='_blank'>{company}</a></i>                                                                  <span>{year}</span></p>
        {description.map((role) => { return <li>{role}</li> })}
      </ul>
    )
  }
})

export default Position
