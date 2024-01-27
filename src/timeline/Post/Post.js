import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user = "harshit Dixit", description, postImage, likes = "45k", timestamp = "1d" }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentToggle = () => {
    setShowComments(!showComments);
  };

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleAddComment = () => {
    // Add logic to handle adding a comment (e.g., send it to a server or update state)
    console.log(`Added comment: ${commentText}`);
    // Clear the comment text field after adding a comment
    setCommentText("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {/* {user.charAt(0).toUpperCase()} */}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="PostImage" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon
              className={`postIcon ${isLiked ? "liked" : ""}`}
              onClick={handleLikeToggle}
            />
            <ChatBubbleOutlineIcon
              className="postIcon"
              onClick={handleCommentToggle}
            />
            <TelegramIcon className="postIcon" />
          </div>
          {showComments && (
            <div className="commentsSection">
            <div className="commentInputContainer">
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={handleCommentTextChange}
              />
              {commentText && (
                <button className="addCommentButton" onClick={handleAddComment}>
                  <span>+</span>
                </button>
              )}
            </div>
          </div>
          )}
          <div className="pst">{description}</div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {isLiked ? "You" : likes} people.
      </div>
    </div>
  );
}

export default Post;
