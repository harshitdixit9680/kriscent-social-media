import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../features/userSlice";
import { Link } from "react-router-dom";

function Sidenav() {
  const user = useSelector((state) => state.data.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    // signOut(auth);
  };
  return (
    <div className="sidenav">
      {/* <img
       
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      /> */}
<span  className="sidenav__logo">Kriscent</span>
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span><Link className="spans" to="/"> Home</Link></span>
        </button>
      
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <Link className="spans" to="/createpost">
          <span>
            {"  "}
            Create
          </span>
          </Link>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span><Link className="spans" to = "/reels">Reels</Link> </span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span><Link  className="spans" to="message">Messages</Link> </span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span><Link  className="spans" to="notification">Notifications</Link></span>
        </button>
        
        <button className="sidenav__button">
          <Avatar></Avatar>
         
          <span>
          {" "}
            <button onClick={handelLogout} className="logout__button">
              <Link  className="spans" to="LogOut"></Link>
 Logout
            </button>
          </span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
