import React from "react";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increase, increment, toggle } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlice.counter);
  const show = useSelector((state) => state.counterSlice.showCounter);
  const Login = useSelector((state) => state.authSlice.isLoggedIn);

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  const incrementHandle = () => {
    dispatch(increment());
  };

  const decrementHandle = () => {
    dispatch(decrement());
  };
  const increaseHandle = () => {
    dispatch(increase(5));
  };

  return (
    <>
      {Login && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {show && <div className={classes.value}>{counter}</div>}
          <div className="mt-3">
            <button className="btn btn-primary mx-2" onClick={incrementHandle}>
              increment
            </button>
            <button className="btn btn-primary mx-2" onClick={increaseHandle}>
              Increase By 5
            </button>
            <button className="btn btn-danger mx-2" onClick={decrementHandle}>
              decrement
            </button>
          </div>
          <button
            className="btn btn-secondary mt-3"
            onClick={toggleCounterHandler}
          >
            Toggle Counter
          </button>
        </main>
      )}
    </>
  );
};

export default Counter;
