import React, { ReactElement } from "react";
import "./style.css";

const Video: React.FC = (): ReactElement => {
  return (
    <>
      <div className="video">
        <div className="thumb">
          <img src="/thumb.jpg" alt="thumb" />
          <span className="time">6:05</span>
        </div>
        <div className="details">
          <h3>Spongebob in Real Life Spongebob in Real Life</h3>
          <ul className="info">
            <li>ChannelName</li>
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

export default Video;
