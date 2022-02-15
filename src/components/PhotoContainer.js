/**
* Wrapper component for the dynamically rendered images elements, this also serves as 'middleware'
* to obtain the search parameter when the axios callback is executed
**/
import React from 'react';
import Photos from './Photos';
import { useParams } from 'react-router-dom';

const PhotoContainer = (props) => {
  const { search } = useParams();
  return (
    <div className="photo-container">
      {/* Only display the number of matches if there are more than 0, append 's' if there are more than 1 */}
      <h2>{ props.photos.length ? props.photos.length + " Result" + (props.photos.length ? 's' : '') : false}</h2>
      <ul>
        <Photos
          search={ search }
          call={ props.call }
          photos={ props.photos }
          />
      </ul>
    </div>
  );
}

export default PhotoContainer;
