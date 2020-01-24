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
import { search, changeQuery } from "src/redux/actions";
import Channel from "src/components/Channel";
import queryString from "query-string";
// import { Action } from "src/redux/actions/youtubeSearch";

interface Props {
  loading: boolean;
  items: Array<SearchItem>;
  query: string;
  search(): void;
  changeQuery(query: string): void;
  location?: { search?: string };
}

class IndexPage extends React.Component<Props, {}> {
  componentDidMount(): void {
    const { loading } = this.props;
    // this.search();
    if (loading) {
      NProgress.start();
    }

    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.location) {
      if (this.props.location.search) {
        const { q } = queryString.parse(this.props.location.search);
        if (q) {
          const qstring = q.toString();
          this.props.changeQuery(qstring);
        }
      }
    }
    this.props.search();
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
          {items.map((item, i) => {
            if (item.id.kind.match(/video/i)) {
              return <Video key={i.toString()} video={item} />;
            }
            if (item.id.kind.match(/list/i)) {
              return <Playlist key={i.toString()} video={item} />;
            }
            return <Channel key={i.toString()} video={item} />;
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

export default connect(mapStateTopProps, { search, changeQuery })(IndexPage);
