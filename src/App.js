import React from "react";
import User from "./pages/user/User";
import Success from "./pages/user/Success";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Teachers from "./pages/user/Teachers";
import Main from "./pages/user/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />
      <Route path="/User" element={<User />} />
      <Route path="/Teachers" element={<Teachers />} />
      <Route path="/Main" element={<Main />} />
    </Routes>
  );
};

export default App;
