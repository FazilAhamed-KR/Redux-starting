import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const Login = useSelector((state) => state.authSlice.isLoggedIn);

  return (
    <>
      <Header />
      {!Login && <Auth />}
      {Login && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
