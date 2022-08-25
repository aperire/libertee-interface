import React from "react";
import { SiHomeadvisor } from "react-icons/si";
import { VscPlayCircle } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";

export const NavigationList = [
  {
    id: 1,
    name: "Home",
    icons: <SiHomeadvisor className="nav_icon" />,
    href: "/",
  },
  {
    id: 2,
    name: "Shorts",
    icons: <VscPlayCircle className="nav_icon" />,
    href: "/shorts",
  },
  {
    id: 3,
    name: "Bookmarks",
    icons: <IoBookmarkOutline className="nav_icon" />,
    href: "/bookmarks",
  },
  {
    id: 4,
    name: "Profile",
    icons: <BsPerson className="nav_icon" />,
    href: "/profile",
  },
];
