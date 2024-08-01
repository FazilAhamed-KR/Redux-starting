import React, { useState } from "react";
import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store";

const Auth = () => {
  const dispatch = useDispatch();

  const [userAuth, setUserAuth] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  const handleChange = (identify, value) => {
    setUserAuth((prevState) => ({
      ...prevState,
      [identify]: value,
    }));
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => handleChange("email", e.target.value)}
              value={userAuth.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => handleChange("password", e.target.value)}
              value={userAuth.password}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
