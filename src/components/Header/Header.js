import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Images/logo.jpg";
import "./Header.css";

class Header extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          padding: "5px",
          width: "97%",
          fontFamily: "arial, verdana, georgia"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "solid lightgray 1px",
            paddingTop: "10px"
          }}
        >
          <Link to="/">
            <img src={logo}></img>
          </Link>
          <div className="potential">
            <Link
              to="/potential"
              // class="header-hover"
              style={{
                color: "gray",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: 15,
                fontFamily: "arial, verdana, georgia"
              }}
            >
              30 years of asking, "How can this ____ be designed [better]?" A
              devout Mormon architect finds answers...
            </Link>
          </div>
        </div>
        <div
          style={{
            margin: "auto",
            width: "90%",
            padding: "8px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <NavLink
            exact
            style={{ color: "gray", textDecoration: "none", cursor: "pointer" }}
            to="/"
            className="header-item"
            activeClassName="header-display"
          >
            Home
          </NavLink>
          <NavLink
            exact
            style={{ color: "gray", textDecoration: "none" }}
            to="/commercial"
            className="header-item"
            activeClassName="header-display"
          >
            Featured Commercial Solutions
          </NavLink>
          <NavLink
            exact
            style={{ color: "gray", textDecoration: "none" }}
            to="/institutional"
            className="header-item"
            activeClassName="header-display"
          >
            Featured Institutional Solutions
          </NavLink>
          <NavLink
            exact
            style={{ color: "gray", textDecoration: "none" }}
            to="/residential"
            className="header-item"
            activeClassName="header-display"
          >
            Featured Residential Solutions
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
