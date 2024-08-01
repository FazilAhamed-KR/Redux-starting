import React from "react";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const Login = useSelector((state) => state.authSlice.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {Login && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
