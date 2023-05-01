import React from "react";

import { red } from "@mui/material/colors";

import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between p-5">
      <div className="flex space-x-3">
        <MenuIcon
          onClick={() => toggleMenuHandler()}
          className="mt-2 cursor-pointer "
          fontSize="medium"
        />
        <div className="flex">
          <a href="/ ">
            <YouTubeIcon sx={{ color: red[500], fontSize: 40 }} />
          </a>
          <h1 className=" text-xl mt-1.5 font-bold">VibeTube</h1>
        </div>
      </div>
      <div className="flex ">
        <div className="h-10 flex items-center p-2 shadow-sm border-2  rounded-l-full w-96 justify-center focus:outline-none ">
          <input className="items-center focus:outline-none w-full p-3 h-full " />
          <CloseIcon />
        </div>

        <button className="h-10 hover:bg-gray-100  text-center shadow-sm border-2 border-l-0 w-24 rounded-r-full">
          <SearchIcon className="mt-2" />
        </button>
        <MicIcon className="mt-3 ml-4" />
      </div>
      <div className="flex space-x-5 mt-2">
        <VideoCallIcon fontSize="medium" />
        <NotificationsActiveIcon fontSize="medium" />
        <AccountCircleIcon fontSize="medium" />
      </div>
    </div>
  );
};

export default Navbar;
