import React, { useState } from "react";
// import NProgress from "nprogress";
import Header from "./components/Header";
import VideoPlaceholder from "./components/VideoPlaceholder";

// NProgress.start();

function App() {
  const [loaded, setLoaded] = useState(false);

  /**
   * render loader before get content
   */
  const renderContent = () => {
    if (!loaded) {
      return (
        <div className="loader">
          <VideoPlaceholder />;
        </div>
      );
    }
    return (
      <div className="container">
        <h1>content</h1>
      </div>
    );
  };

  return (
    <>
      <div className="body">
        <Header />
        {renderContent()}
      </div>
    </>
  );
}

export default App;
