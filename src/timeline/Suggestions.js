import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Suggestions.css";

function Suggestions() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    // Toggle the follow state
    setIsFollowing(!isFollowing);
  };
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollowToggle}>
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
          <p>{isFollowing ? "Following" : "Not Following"}</p>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollowToggle}>
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
          <p>{isFollowing ? "Following" : "Not Following"}</p>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button" onClick={handleFollowToggle}>
            {isFollowing ? "follow" : "Unfollow"}
          </button>
          <p>{isFollowing ? "Following" : "Not Following"}</p>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          {/* <button className="follow__button">Follow</button> */}
          <button className="follow__button" onClick={handleFollowToggle}>
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
          <p>{isFollowing ? "Following" : "Not Following"}</p>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
