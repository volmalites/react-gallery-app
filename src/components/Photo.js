/**
* Iterates through the root components images prop generating a list of dom elements
* Making use of UUID package for the id prop of the list items (https://www.npmjs.com/package/uuid) 
**/
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class Photo extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps['search'] === this.props.search) return;
    this.props.call(this.props.search);
  }

  componentDidMount() {
    this.props.call(this.props.search);
  }

  render() {
    return (
      this.props.photos.map(item => (
        <li key={uuidv4()}><img src={item} alt=""></img></li>
      ))
    );
  }
}

export default Photo;
