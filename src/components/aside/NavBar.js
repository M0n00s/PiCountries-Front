import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillHouseFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDataPrincipal } from "../../redux/reducers/actions/action";
import "../../css/navbar.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const handleRefresh = () => {
    dispatch(getDataPrincipal());
  };
  return (
    <div className="navbar__container">
      <h2>Menu</h2>
      <NavLink to="/client/dashboard" onClick={handleRefresh}>
        <p>
          <BsFillHouseFill /> DashBoard
        </p>
      </NavLink>
      <NavLink to="/client/create">
        <p>
          <BsFillBookmarkPlusFill /> Create Activity
        </p>
      </NavLink>
    </div>
  );
};
