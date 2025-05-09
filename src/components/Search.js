import React, { useRef } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const Search = () => {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current.value,
    };
    const queryString = createSearchParams(query);

    navigate({
      pathname: "/articles",
      search: `?${queryString}`,
    });
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <label for="search-field" class="" id="icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </label>
      <input
        type="search"
        id="search-field"
        className="search"
        ref={searchInputRef}
      />
    </form>
  );
};

export default Search;
