import { createContext } from "react";

const userContext = createContext({
    loggedInUser : "default_user",
    setUserName: () => {},
})

export default userContext;