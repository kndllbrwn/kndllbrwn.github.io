import React from 'react';

const Title = React.createClass({
  render() {
    return (
      <h2 className="componentBody__heading">
        {this.props.header}
      </h2>
    );
  }
});

export default Title;
