import React, { Component, ReactElement } from "react";
import "./style.css";
import Logo from "./Logo";
import Search from "./Search";
import HeaderMobile from "./HeaderMobile";

interface State {
  query: string;
}

export class Header extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      query: "spongebob"
    };
  }

  render(): ReactElement {
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
