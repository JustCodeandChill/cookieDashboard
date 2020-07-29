import "../../styles/Navbar.css";
import Notification from "./Notification";
import RingNotification from "./RingNotification";
import TaskNotification from "./TaskNotification";
import Profile from "./Profile";
import Logo from "./Logo";

import React from "react";

export default () => {
  return (
    <div className="navbar">
      <Logo />
      <div>
        <Profile />
        <TaskNotification />
        <RingNotification />
        <Notification />
      </div>
    </div>
  );
};
