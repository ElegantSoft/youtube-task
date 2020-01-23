import React, { ReactElement } from "react";
import Filter from "src/components/Filter";
import VideoPlaceholder from "src/components/VideoPlaceholder";
import Video from "src/components/Video";
import Header from "src/components/Header";
import ytApi from "src/utils/apis/youtube";
import NProgress from "nprogress";
import "./style.css";
import { SearchItem } from "src/utils/interfaces/youtubeItem";
import { connect } from "react-redux";
import { CentralState } from "src/redux/reducers";

interface Props {
  loading: boolean;
  items: Array<SearchItem>;
}

interface State {
  query: string;
}

class IndexPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  componentDidMount(): void {
    const { loading } = this.props;
    this.search();
    if (loading) {
      NProgress.start();
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    const { loading } = this.props;
    if (prevProps.loading !== loading) {
      if (loading) {
        NProgress.start();
      } else {
        NProgress.done();
      }
    }
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
    const { loading } = this.props;
    if (loading) {
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

const mapStateTopProps = (state: CentralState): Props => {
  return {
    loading: state.youtube.loading,
    items: state.youtube.items
  };
};

export default connect(mapStateTopProps)(IndexPage);
