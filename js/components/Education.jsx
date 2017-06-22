import React from 'react'
import Title from './Title'

const Education = React.createClass({
  render () {
    return (
      <dl>
        <Title header='Education' />
        <dt>  General Assembly</dt>
        <dd>Graduate, UX Day Camp</dd>
        <dt>  Pennsylvania State University </dt>
        <dd>B.A., Sociology</dd>
        <dd>Minor degree, Information Science and Statistical Analysis</dd>
      </dl>
    )
  }
})

export default Education
