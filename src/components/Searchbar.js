import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import UserCard from "./UserCard";
import { getRepos, getUserData } from "../api/github-api.ts";
import Repositories from "./Repositories";
import Organisations from "./Organisations";

const Searchbar = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser();
    searchRepos();
  };

  const searchUser = () => {
    getUserData(username).then((data) => {
      setUser(data.user);
      setOrgs(data.orgs);
      console.log(data.orgs)
    });
  };
  const searchRepos = () => {
    setLoading(true);
    getRepos(username).then((data) => {
      setLoading(false);
      setRepos(data);
      console.log("Data:", data);
    });
    console.log("Repos: ", repos);
  };

  return (
    <div>
      <form
        style={{ marginTop: 80, display: "flex" }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <TextField
          color="primary"
          value={username}
          id="outlined-basic"
          label="Search Github User"
          variant="outlined"
          style={{ width: 400 }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginLeft: "1em" }}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </form>
      {user.id ? <UserCard user={user} /> : <div></div>}
      {repos[0] ? <Repositories rows={repos} /> : <div></div>}
      {orgs[0] ? <Organisations rows={orgs} /> : <div></div>}

    </div>
  );
};

export default Searchbar;
