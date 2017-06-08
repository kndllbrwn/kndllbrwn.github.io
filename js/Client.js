import React from 'react';
import ReactDom from 'react-dom';

class Component extends React.Component{
  render() {
    return (
      <h1> React component</h1>
    )
  }
}

ReactDom.render(<Component/>, document.getElementById('react'));