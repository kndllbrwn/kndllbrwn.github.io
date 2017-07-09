import React from 'react';
import Title from './Title';

const Interests = React.createClass({
  render() {
    return (
      <ul>
        <Title header="Interests & Activities" />
        <li>Volunteerism and change management(President of Penn State Alumni AIG)</li>
        <li>Consumer advocacy and education awareness</li>
        <li>Health and fitness enthusiast</li>
      </ul>
    );
  }
});

export default Interests;
