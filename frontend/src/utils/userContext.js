import { createContext } from "react";

const userContext = createContext({
    loggedInUser : "default_user"
})

export default userContext;