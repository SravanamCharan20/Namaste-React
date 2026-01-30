import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  const [username, setUserName] = useState(null);
  return (
    <div>
      <h1>hello</h1>
      <Provider store={appStore}>
        <userContext.Provider value={{ loggedInUser: username, setUserName }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
