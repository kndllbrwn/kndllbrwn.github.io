import React from 'react'

const Title = React.createClass({
  render () {
    return (
        <h2>
          {this.props.header}
        </h2>
    )
  }
})

export default Title