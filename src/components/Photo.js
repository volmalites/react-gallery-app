/**
* Container for Photo elements
**/
import React from 'react';

const Photo = (props) => {
  return (
    <div className="photo">
      <li><img src={props.item} alt={ props.title }></img></li>
    </div>
  );
}

export default Photo;
