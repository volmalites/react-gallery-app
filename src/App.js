import React from 'react';
import axios from 'axios';
import apiKey from './config'; // File containing the Flickr key

//App Components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import PageNotFound from './components/PageNotFound';

//React Router
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      result: false
    };
  }

  render() {
    /**
     * Function using axios to get images from flickr API
     * 
     * @function getImages
     * @param {array} search The search input provided to flickr API
    **/
    const getImages = search => {
      this.setState({
        images: [],
        result: <Loading />
      });
      axios.get('https://www.flickr.com/services/rest/', {
        params: {
          method: 'flickr.photos.search',
          api_key: apiKey,
          tags: search,
          per_page: 24,
          format: 'json',
          nojsoncallback: 1
        }
      }).then(res => {
        const photos = res.data.photos.photo;
        let images = photos.map(img => {
          return {
            url: `https://farm5.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`,
            title: img.title
          }
        });
          console.log(images.length);
        this.setState({
          images: images,
          result: (images.length > 0) ? false : <NotFound /> // Component to render when no results are found
        });
      }).catch(error => {
        console.log(error);
      });
    }

    return (
      <div className="App">
        <BrowserRouter>
          <nav className="container">
            <Search call={ getImages } />
            <Nav />
            <Routes>
              <Route
                exact
                path="/page/:search"
                element={
                  <PhotoContainer
                    search={ this.state.search }
                    call={ getImages }
                    photos={ this.state.images }
                  />
                }
              />
              <Route path="*" element={ <PageNotFound /> } /> {/*Component to render for URL mismatch*/}
            </Routes>
            { this.state.result }
          </nav>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
