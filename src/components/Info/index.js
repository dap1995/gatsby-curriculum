import React from 'react'

const Info = (props) => {
  return (
    <div className="info">
      <h4><i className={props.icon}></i> {props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default Info;