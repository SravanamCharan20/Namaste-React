import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import userContext from "./utils/userContext";

const App = () => {
  return (
    <div>
      <userContext.Provider value={{ loggedInUser: "charan" }}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </div>
  );
};

export default App;
