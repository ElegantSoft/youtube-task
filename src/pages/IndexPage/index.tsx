import React, { ReactElement } from "react";
import Filter from "src/components/Filter";
import VideoPlaceholder from "src/components/VideoPlaceholder";
import Video from "src/components/Video";
import Header from "src/components/Header";
import ytApi from "src/utils/apis/youtube";
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

  componentDidMount(): void {
    this.search();
  }

  /**
   * get data by query
   */

  private search = async (): Promise<void> => {
    try {
      const response = await ytApi.get("/search", {
        params: {
          q: "spongebob"
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
        <Filter />
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
