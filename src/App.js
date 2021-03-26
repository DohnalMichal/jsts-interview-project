import React from "react";
import Searchbar, { user } from "./components/Searchbar";
import UserCard from "./components/UserCard";

import "/styles.scss";

const App = () => {
  return (
    <div>
      <Searchbar />
      <UserCard />
    </div>
  );
};

export default App;
