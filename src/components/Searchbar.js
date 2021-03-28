import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import UserCard from "./UserCard";
import { getRepos, getUserData } from "../api/github-api.ts";
import Repositories from "./Repositories";

const Searchbar = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser();
    searchRepos();
  };

  const searchUser = () => {
    getUserData(username).then((data) => {
      setUser(data.user);
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
      {repos[0] ? <Repositories rows={repos} loading={loading} /> : <div></div>}
    </div>
  );
};

export default Searchbar;
