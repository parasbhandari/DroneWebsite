import React from "react";
import { homeVideo } from "../../scripts/Images";

const HomeVideo = () => {
  return (
    <div>
      <video
        src={homeVideo}
        alt="Video section of Evrest Sky Flying Academy"
        controls
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className="w-full  h-full md:h-[70vh] object-contain md:object-cover"
      />
    </div>
  );
};

export default HomeVideo;
