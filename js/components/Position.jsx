import React from 'react';
import Modal from 'react-modal'

const Position = React.createClass({
  getInitialState: function() {
    return {isOpen: false};
  },
  handleModalClose() {
    this.setState({
      isOpen: false})
  },
  render() {
    const { title, about, company, link, year, description } = this.props;
    return (
      <ul className="position">
        <h3>
          {title}
        </h3>
        <button className="button" onClick={() => this.setState({isOpen: true})}>Description</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Modal"
        >
          <h1>{title}<button className="button" onClick={() => this.setState({isOpen: false})}>x</button></h1>
          <p>{about}</p>
        </Modal>
        <p>
          <i>
            <a href={link} target="_blank">
              {company}
            </a>
          </i>{' '}
          <span>{year}</span>
        </p>
        {description.map(role => {
          return (
            <li key={role}>
              {role}
            </li>
          );
        })}
      </ul>
    );
  }
});

export default Position;