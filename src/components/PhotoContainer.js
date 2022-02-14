/**
* Wrapper component for the dynamically rendered images elements, this also serves as 'middleware'
* to obtain the search parameter when the axios callback is executed
**/
import Photo from './Photo';
import { useParams } from 'react-router-dom';

const PhotoContainer = (params) => {
  const { search } = useParams();
  return (
    <div className="photo-container">
      {/* Only display the number of matches if there are more than 0, append 's' if there are more than 1 */}
      <h2>{ params.photos.length ? params.photos.length + " Result" + (params.photos.length ? 's' : '') : false}</h2>
      <ul>
        <Photo
          search={ search }
          call={ params.call }
          photos={ params.photos }
          />
      </ul>
    </div>
  );
}

export default PhotoContainer;
