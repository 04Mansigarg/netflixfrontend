import { React, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

const Player = () => {
  return (
    <div>
      <ReactPlayer
        controls
        width="100%"
        height="95vh"
        url="https://www.youtube.com/watch?v=hIR8Ar-Z4hw"
      />
    </div>
  );
};

export default Player;
