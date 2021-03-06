import React from "react";
import Title from "./Title";

const Examples = React.createClass({
  render() {
    const { title } = this.props;
    return (
      <div className="componentBody">
        <Title header="Projects" />
        <div id="examples">
          {this.props.projects.map((project) => {
            return (
              <div key={project.title}>
                <h3 className="project__title">{project.title}</h3>
                <a target="_blank" href={project.link}>
                  <img
                    className="projectImage"
                    src={`/public/images/${project.image}.png`}
                  />
                </a>
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
});

export default Examples;
