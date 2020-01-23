/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, ReactElement } from "react";
import PropTypes from "prop-types";

interface Props {
  query: string;
}

const HeaderMobile: React.FC<Props> = ({ query }) => {
  const [isSearch, setIsSearch] = useState(false);

  const searchControl = (): ReactElement => {
    if (isSearch) {
      return (
        <div className="search-mobile-input">
          <input type="text" value={query} />
          <span onClick={() => setIsSearch(false)}>&#10005;</span>
          <div className="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13">
              <g strokeWidth="2" stroke="#fff" fill="none">
                <path d="M11.33 11.71l-4-4" />
                <circle cx="5" cy="5" r="4" />
              </g>
            </svg>
          </div>
        </div>
      );
    }
    return (
      <div className="search-mobile-input">
        <p className="query">{query}</p>
        <div className="search-btn" onClick={() => setIsSearch(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13">
            <g strokeWidth="2" stroke="#fff" fill="none">
              <path d="M11.33 11.71l-4-4" />
              <circle cx="5" cy="5" r="4" />
            </g>
          </svg>
        </div>
      </div>
    );
  };
  return (
    <div className="header-mobile elevation-1">
      <div className="container ">
        <img src="/youtube-white.png" alt="" />
        {searchControl()}
      </div>
    </div>
  );
};

export default HeaderMobile;
HeaderMobile.propTypes = {
  query: PropTypes.string.isRequired
};
