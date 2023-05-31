import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { MY_API_KEY, formatViews } from "../constants/constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState([]);
  const videoId = searchParams.get("v");

  const getVideoById = async () => {
    const YOUTUBE_VIDEO_BY_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${MY_API_KEY}`;

    const data = await fetch(YOUTUBE_VIDEO_BY_ID);
    const json = await data.json();
    setVideoInfo(json.items[0]);
  };

  useEffect(() => {
    getVideoById();
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div>
      {console.log(videoInfo)}
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {console.log(videoInfo?.snippet?.title)}
      <div className="">
        <ul>
          <li className="font-bold text-md">{videoInfo?.snippet?.title}</li>
          <li className="text-neutral-700">
            {videoInfo?.snippet?.channelTitle}
          </li>
          <li className="text-neutral-700">
            {formatViews(videoInfo?.statistics?.viewCount)} views
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WatchPage;
