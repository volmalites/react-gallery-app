/**
* Animated loading spinner made with css
**/
import React from 'react';
import '../loader.css';

const Loading = () => {
  return (
    <div className="loading">
      <h3>Loading...</h3>
      <p>Getting awesome images from flickr API, please be patient</p>
      <div className="spin"></div>
    </div>
  );
}

export default Loading;
