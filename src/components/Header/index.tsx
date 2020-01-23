import React, { ReactElement } from "react";
import { connect } from "react-redux";
import "./style.css";
import { CentralState } from "src/redux/reducers";
import Logo from "./Logo";
import Search from "./Search";
import HeaderMobile from "./HeaderMobile";
import { changeQuery, search } from "../../redux/actions/youtubeSearch";

interface Props {
  query: string;
  changeQuery(query: string): void;
  doSearch(): void;
}

const Header: React.FC<Props> = (props): ReactElement => {
  return (
    <>
      <div className="header elevation-1">
        <div className="container">
          <div className="logo">
            <Logo />
            <span>EG</span>
          </div>
          <div className="search-container">
            <Search
              query={props.query}
              changeQuery={props.changeQuery}
              doSearch={props.doSearch}
            />
          </div>
        </div>
      </div>
      <HeaderMobile
        query={props.query}
        changeQuery={props.changeQuery}
        doSearch={props.doSearch}
      />
    </>
  );
};

const mapStateToProps = (state: CentralState): { query: string } => {
  return {
    query: state.youtube.query
  };
};

export default connect(mapStateToProps, { changeQuery, doSearch: search })(
  Header
);
