import React from "react";

const SearchResults = ({display, onMouseLeave}) => {
    if(!display){
        return null;
    }
  return (
    <div className="search-results-container absolute bg-gray-50 text-gray-800 w-100 p-2 rounded-lg font-semibold" onMouseLeave={onMouseLeave}>
      <div className="font-bold border-b-1 border-gray-800 pb-2">Explore</div>
      <div>
        <ul>
          <li className="searchResults">
            <a href="">Enterprise</a>
          </li>
          <li className="searchResults">
            <a href="">Security</a>
          </li>
          <li className="searchResults">
            <a href="">Copilot</a>
          </li>
          <li className="searchResults">
            <a href="">Pricing</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="searchResults">
          <a href="">Search syntax tips</a>
        </p>
      </div>
    </div>
  );
};

export default SearchResults;
