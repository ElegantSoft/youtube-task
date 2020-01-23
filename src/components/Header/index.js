import React, { Component } from "react";
import "./style.css";
import Logo from "./Logo";
import Search from "./Search";
import HeaderMobile from "./HeaderMobile";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "spongebob"
    };
  }

  render() {
    const { query } = this.state;
    return (
      <>
        <div className="header elevation-1">
          <div className="container">
            <div className="logo">
              <Logo />
              <span>EG</span>
            </div>
            <div className="search-container">
              <Search query={query} />
            </div>
          </div>
        </div>
        <HeaderMobile query={query} />
      </>
    );
  }
}

export default Header;
