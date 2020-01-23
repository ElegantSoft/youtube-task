import React, { ReactElement } from "react";

interface Props {
  query: string;
  changeQuery(query: string): void;
  doSearch(): void;
}

const Search: React.FC<Props> = ({
  query,
  changeQuery,
  doSearch
}): ReactElement => {
  const handleKeyDown = (e: { key: string }): void => {
    if (e.key === "Enter") {
      doSearch();
    }
  };
  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={e => changeQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={() => doSearch()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13">
          <g strokeWidth="2" stroke="#6c6c6c" fill="none">
            <path d="M11.29 11.71l-4-4" />
            <circle cx="5" cy="5" r="4" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Search;
