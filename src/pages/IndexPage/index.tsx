import React, { ReactElement } from "react";
import VideoPlaceholder from "../../components/VideoPlaceholder";
import Video from "../../components/Video";
import Header from "../../components/Header";
import "./style.css";

interface State {
  loaded: boolean;
}

class IndexPage extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loaded: true
    };
  }

  /**
   * render loader before get content
   */
  renderContent = (): ReactElement => {
    const { loaded } = this.state;
    if (!loaded) {
      return (
        <div className="loader">
          <VideoPlaceholder />;
        </div>
      );
    }
    return (
      <div className="content container">
        <Video />
      </div>
    );
  };

  render(): ReactElement {
    return (
      <>
        <div className="body">
          <Header />
          {this.renderContent()}
        </div>
      </>
    );
  }
}

export default IndexPage;
