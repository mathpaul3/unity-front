import { useEffect, useState } from "react";
import { WordBlockType } from "../types";
import ReactPlayer from "react-player/lazy";

function VideoPlayer({ data }: { data: WordBlockType }) {
  const [playIndex, setPlayIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleNextVideo = () => {
    if (playIndex === (data.sequence ?? 0)) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };

  useEffect(() => {
    setPlaying(true);
  });

  return (
    <>
      <div id="video-player">
        <div className="wrapper">
          <ReactPlayer
            url={data?.sequence ? data.sequence[playIndex]?.url : undefined}
            playing={playing}
            controls
            onEnded={() => {
              handleNextVideo();
            }}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
