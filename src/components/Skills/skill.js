import React from 'react';

const Skill = (props) => {
  return (
    <div className="skill">
      <div className="card">
        <div className="face front">
          <div className="inner">
            <h3>{props.name}</h3>
            <i className={props.icon}></i>
          </div>
        </div>
        <div className="face back">
          <div className="inner">
            <p>{props.description}</p>
            <ul>
              {props.projects && props.projects.map(project =>
                <li key={`project-${project.url}`}><a href={project.url}>{project.name}</a></li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;