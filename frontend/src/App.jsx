import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import userContext from "./utils/userContext";

const App = () => {
  const [username,setUserName] = useState(null);
  return (
    <div>
      <userContext.Provider value={{ loggedInUser: username,setUserName }}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </div>
  );
};

export default App;
