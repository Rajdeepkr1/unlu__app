import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import VisibilityIcon from '@material-ui/icons/Visibility';

function Post({ profilePic, image, username, timestamp, message }) {
    let time = new Date().toLocaleString();
    let num=0;
    const [count, setCount] = useState(num)
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topinfo">
            <h3>{username}</h3>
            {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
            
            <p>{time}</p>
        </div>
      </div>
      <div className="post__bottom">
          <p>{message}</p>
      </div>
      <div className="post__image">
          <img src={image} alt="" />
      </div>
      {/* <div className="post__image">
          <img src={imageToPost} alt="" />
      </div> */}
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon/>
          
            <p onClick={()=>{
              setCount(count+1)
          }}>{count} Like</p>
  
          
          </div>

          <div className="post__option">
          <ChatBubbleOutlineIcon/>
          <p>Comment</p>
          </div>

          <div className="post__option">
          <NearMeIcon/>
          <p>Share</p>
          </div>

          <div className="post__option">
          < VisibilityIcon/>
          <p>Views</p>
          
          
          </div>
      </div>
    </div>
  );
}

export default Post;
