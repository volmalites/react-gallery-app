/**
* Iterates through the root components images prop generating a list of dom elements
* Making use of UUID package for the id prop of the list items (https://www.npmjs.com/package/uuid) 
**/
import React from 'react';
import Photo from './Photo';
import { v4 as uuidv4 } from 'uuid';

class Photos extends React.Component {
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
        <Photo key={uuidv4()} item={ item.url } title={ item.title } />
      ))
    );
  }
}

export default Photos;
