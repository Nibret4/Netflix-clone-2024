import React, { useEffect, useState } from "react";
import Netflixlogo from "../../assets/imges/marco-polo-season-2-folder-icons-netflix-2014-logo-svg-png-clipart.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./headr.css";
import profile_img from "../../assets/imges/profile_img.png"
const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <a href="/">
              <img src={Netflixlogo} alt="Netflix logo" width="100"></img>
            </a>

            <a href="https://www.netflix.com/browse">
              <li>Home</li>
            </a>
            <a href="https://www.netflix.com/browse/genre/83">
              <li>TvShows</li>
            </a>
            <a href="https://www.netflix.com/browse/genre/34399">
              <li>Movies</li>
            </a>
            <a href="https://www.netflix.com/latest">
              <li>New & popular</li>
            </a>
            <a href="https://www.netflix.com/browse/my-list">
              <li>My Lists</li>
            </a>

            <a href="https://www.netflix.com/browse/original-audio">
              <li>Browse by Language</li>
            </a>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <a href="https://www.netflix.com/serach">
              <li>
                <SearchIcon />
              </li>
            </a>
            <a href="https://www.netflix.com/kides">
              <li>childern</li>
            </a>

            <a href="https://www.netflix.com/notifications">
              <li>
                <NotificationsNoneIcon />
              </li>
            </a>

            <a href="https://www.netflix.com/account">
              <li>
                {/* <AccountBoxIcon /> */}
                <img src={profile_img} alt="" />
              </li>
            </a>
            <a href="https://www.netflix.com/arrow">
              <li>
                <ArrowDropDownIcon />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;



