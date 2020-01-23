import React, { ReactElement } from "react";
import Filter from "src/components/Filter";
import VideoPlaceholder from "src/components/VideoPlaceholder";
import Video from "src/components/Video";
import Playlist from "src/components/Playlist";
import Header from "src/components/Header";
import NProgress from "nprogress";
import "./style.css";
import { SearchItem } from "src/utils/interfaces/youtubeItem";
import { connect } from "react-redux";
import { CentralState } from "src/redux/reducers";
import { search } from "src/redux/actions";
import Channel from "src/components/Channel";
// import { Action } from "src/redux/actions/youtubeSearch";

interface Props {
  loading: boolean;
  items: Array<SearchItem>;
  query: string;
  search(query: string): void;
}

class IndexPage extends React.Component<Props, {}> {
  componentDidMount(): void {
    const { loading, query } = this.props;
    // this.search();
    if (loading) {
      NProgress.start();
    }

    // eslint-disable-next-line react/destructuring-assignment
    this.props.search(query);
  }

  componentDidUpdate(prevProps: Props): void {
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
        {this.renderVideos()}
      </div>
    );
  };

  renderVideos = (): ReactElement => {
    const { items } = this.props;
    if (items) {
      return (
        <>
          {items.map(item => {
            if (item.id.kind.match(/video/i)) {
              return <Video key={item.id.videoId} video={item} />;
            }
            if (item.id.kind.match(/list/i)) {
              return <Playlist key={item.id.videoId} video={item} />;
            }
            return <Channel key={item.id.videoId} video={item} />;
          })}
        </>
      );
    }
    return <div />;
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

interface MapStateTopProps {
  loading: boolean;
  items: SearchItem[];
  query: string;
}

const mapStateTopProps = (state: CentralState): MapStateTopProps => {
  return {
    loading: state.youtube.loading,
    items: state.youtube.items,
    query: state.youtube.query
  };
};

export default connect(mapStateTopProps, { search })(IndexPage);
