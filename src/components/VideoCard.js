import React from "react";

import { formatViews } from "../constants/constants";
import { Link } from "react-router-dom";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <Link to={"/watch?v=" + videoInfo.id} className="  p-2 m-3  w-96 ">
      <img
        className="rounded-lg h-56 w-96"
        alt="thumbnail"
        src={thumbnails.high.url}
      />
      <ul>
        <li className="font-bold text-md">{title}</li>
        <li className="text-neutral-700">{channelTitle}</li>
        <li className="text-neutral-700">
          {formatViews(statistics.viewCount)} views
        </li>
      </ul>
    </Link>
  );
};

export default VideoCard;
