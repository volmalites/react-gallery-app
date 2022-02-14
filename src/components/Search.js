/**
* Search component which also dynamically updates the url with the current path
* The broswer history is also updated to allow for forward and back navigation
**/
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Search(props) {
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const search = e => {
    // Search errors
    document.getElementById('input-search').style.border = '3px solid #d7dbdf';
    document.getElementById('error').innerText = '';
    e.preventDefault();
    if (searchVal !== '') { // No empty search fields
      props.call(searchVal);
      const path = `page/${searchVal}`;
      navigate(path);
    } else {
      document.getElementById('input-search').style.border = '3px solid red';
      document.getElementById('error').innerText = 'Search field can not be empty';
    }
  }

  return (
    <div>
      <form className="search-form" onSubmit={ search }>
        <input type="search"
          name="search"
          placeholder="Search"
          required=""
          value={ searchVal }
          onChange={ e => setSearchVal(e.target.value) }
          id="input-search"
        ></input>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </button>
      </form>
      <p id="error"></p>
  </div>
  );
}

export default Search;
