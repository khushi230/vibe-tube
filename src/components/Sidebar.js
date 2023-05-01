import React from "react";

import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import MusicVideoRoundedIcon from "@mui/icons-material/MusicVideoRounded";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div>
      <List>
        {["Home", "Shorts", "Subscriptions", "Originals", "VibeTube Music"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <HomeIcon />
                  ) : index === 1 ? (
                    <GroupWorkIcon />
                  ) : index === 2 ? (
                    <SubscriptionsIcon />
                  ) : index === 3 ? (
                    <SubscriptionsOutlinedIcon />
                  ) : index === 4 ? (
                    <MusicVideoRoundedIcon />
                  ) : null}
                </ListItemIcon>
                {isMenuOpen && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      {isMenuOpen && (
        <>
          {" "}
          <Divider />
          <List>
            {[
              "Library",
              "History",
              "Your Videos",
              "Watch later ",
              "Downloads",
              "Liked videos",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? (
                      <LibraryAddRoundedIcon />
                    ) : index === 1 ? (
                      <HistoryRoundedIcon />
                    ) : index === 2 ? (
                      <SubscriptionsIcon />
                    ) : index === 3 ? (
                      <WatchLaterRoundedIcon />
                    ) : index === 4 ? (
                      <FileDownloadRoundedIcon />
                    ) : index === 5 ? (
                      <ThumbUpRoundedIcon />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <ListItemText className="p-3">Subscriptions</ListItemText>
        </>
      )}
    </div>
  );
};

export default Sidebar;
