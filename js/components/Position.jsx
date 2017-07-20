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
      <p>
        <h3 className="position__h3">{title}
        <button className="position__button" onClick={() => this.setState({isOpen: true})}>Description</button>
        </h3>
        </p>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Modal"
          className="modal"
          
        >
          <h1 className="modal__title">{title}</h1>
          <div className="modal__body">
            <p>{about}</p>
            <p><a href={link} target="_blank">{company}</a></p>
            <button className="modal__button" onClick={() => this.setState({isOpen: false})}>Close</button>
          </div>
          
        </Modal>
        <p className="position__p">
          <i>
            <h4>{company}</h4>
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