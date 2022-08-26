import React, { memo } from "react";
import SearchHeaderWrapper from "./SearchHeader.style";
import { IoSearchOutline } from "react-icons/io5";

const SearchHeader = () => {
  return (
    <>
      <SearchHeaderWrapper>
        <div className="SearchHeader">
          <div className="Input_section">
            <IoSearchOutline className="search_icon" />
            <input
              type="text"
              placeholder="Search Username"
              name="search"
              autoComplete="off"
            />
          </div>
        </div>
      </SearchHeaderWrapper>
    </>
  );
};

export default memo(SearchHeader);
