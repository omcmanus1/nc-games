import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
