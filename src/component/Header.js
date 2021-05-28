import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";




function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://unlu.io/unlu-logo.png"
          alt="unlulogo"
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div
          className="header__option
        header__option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        
        
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
      </div>
    </div>
  );
}

export default Header; 

