import React from "react";
import ContentLoader from "react-content-loader";

const VideoPlaceholder: React.FC = () => {
  return (
    <ContentLoader
      width={400}
      height={800}
      speed={2}
      ariaLabel="Loading news..."
    >
      <rect x="42.84" y="10" rx="5" ry="5" width="143.55" height="86.59" />
      <rect x="192.84" y="30" rx="0" ry="0" width="148.72" height="12.12" />
      <rect x="192.84" y="50" rx="0" ry="0" width="89" height="9" />

      <rect x="42.84" y="110" rx="5" ry="5" width="143.55" height="86.59" />
      <rect x="192.84" y="130" rx="0" ry="0" width="148.72" height="12.12" />
      <rect x="192.84" y="150" rx="0" ry="0" width="89" height="9" />

      <rect x="42.84" y="210" rx="5" ry="5" width="143.55" height="86.59" />
      <rect x="192.84" y="230" rx="0" ry="0" width="148.72" height="12.12" />
      <rect x="192.84" y="250" rx="0" ry="0" width="89" height="9" />
      <rect x="42.84" y="310" rx="5" ry="5" width="143.55" height="86.59" />
      <rect x="192.84" y="330" rx="0" ry="0" width="148.72" height="12.12" />
      <rect x="192.84" y="350" rx="0" ry="0" width="89" height="9" />
    </ContentLoader>
  );
};

export default VideoPlaceholder;
