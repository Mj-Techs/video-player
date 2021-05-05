import React, { useState } from "react";
import ReactPlayer from "react-player";
const VideoPlayer = () => {
  const [video, setVideo] = useState(null);
  const [control, setControl] = useState(false);
  const handleChange = (event) => {
    setVideo(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <br />
      {video && (
        <ReactPlayer
          url={video}
          width="500px"
          height="300px"
          controls={true}
          playing={control}
          style={{ padding: "20px", margin: "20px" }}
        />
      )}
      <button onClick={() => setControl(true)}>play</button>
      <button onClick={() => setControl(false)}>stop</button>
    </div>
  );
};

export default VideoPlayer;
