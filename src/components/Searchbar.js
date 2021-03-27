import React, { useState, useEffect, useContext } from "react";
import { TextField } from "@material-ui/core";

import { getRepos, getUserData } from "../api/github-api";
import { UserContext } from "./UserContext";

const Searchbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [userInput, setUserInput] = useState(user);

  // const { repos, setRepos } = useContext(UserContext)
  // // console.log(user);

  // // const [userInput, setUserInput] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [organisations, setOrganisations] = useState([]);

  // const { username, setUsername, dataState } = useContext(UserContext);

  // const setData = ({ name }) => {
  //   console.log(name);
  //   setName(name);
  // }

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    getUserData(userInput).then((data) => {
      setUser(data);
      console.log(data);
    });
    // getRepos(userInput).then((data) => {
    //   setRepos(data);
    //   console.log(data);
    // });
  };
  return (
    <form
      style={{ marginTop: 80 }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
      <TextField
        color="primary"
        id="outlined-basic"
        label="Search Github User"
        variant="outlined"
        style={{ width: 400 }}
        onChange={handleSearch}
      />
    </form>
  );
};

export default Searchbar;
