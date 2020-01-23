import React from "react";
import VideoPlaceholder from "../../components/VideoPlaceholder";
import Video from "../../components/Video";
import Header from "../../components/Header";
import "./style.css";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }

  /**
   * render loader before get content
   */
  renderContent = () => {
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

  render() {
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
