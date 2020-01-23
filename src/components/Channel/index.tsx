import React, { ReactElement } from "react";
import "./style.css";
import { SearchItem } from "src/utils/interfaces/youtubeItem";

interface Props {
  video: SearchItem;
}

const Channel: React.FC<Props> = ({ video }): ReactElement => {
  return (
    <>
      <div className="channel">
        <div className="thumb">
          <img src={video.snippet.thumbnails.medium.url} alt="thumb" />
        </div>
        <div className="details">
          <h3 className="web">{video.snippet.title}</h3>
          <h3 className="phone">{`${video.snippet.title.substring(
            0,
            45
          )} ...`}</h3>
          <ul className="info">
            <li>{video.snippet.channelTitle}</li>
            <li>54M views</li>
            <li>1 year ago</li>
          </ul>
          <p className="description">
            Sponge Bob is the testSponge Bob is the testSponge Bob is the
            testSponge Bob is the test
          </p>
        </div>
      </div>
    </>
  );
};

export default Channel;
