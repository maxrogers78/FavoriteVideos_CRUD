// React
import React, { useEffect } from "react";
// axios
import axios from "axios";

const VideoList = () => {
  const loadVideos = async () => {
    const res = await axios("http://localhost:5000/videos");
    console.log(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return <div>video list</div>;
};

export default VideoList;
