import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState({
    avatar_url: "https://avatars.githubusercontent.com/u/26080144?v=4",
    html_url: "https://github.com/DohnalMichal",
    login: "DohnalMichal",
    public_repos: 15,
    setUser: () => { }
  });
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}