import React, { useState, useEffect } from "react";
import Searchbar, { user } from "./components/Searchbar";
import UserCard from "./components/UserCard";
import { UserProvider } from "./components/UserContext";

import "/styles.scss";

const App = () => {
  const [user, setUser] = useState({});
  const value = { user, setUser };

  return (
    <div>
      <UserProvider value={value}>
        <Searchbar />
        <UserCard />
      </UserProvider>
    </div>
  );
};

export default App;
