import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardHeader,
  Box
} from "@material-ui/core";
import UserCard from "./UserCard";
import { getRepos, getUserData } from "../api/github-api";

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
      console.log(data.user);
      setUser(data.user);
    })
  }
  const searchRepos = () => {
    setLoading(true);
    getRepos(username).then((data) => {
      setLoading(false);
      setRepos(data);
      console.log("Data:", data);
    });
    console.log("Repos: ", repos);
  };

  const renderRepo = (repo) => {
    return (
      <Card style={{ marginTop: "1em", padding: "1em" }}>
        <Box display="flex" flexDirection="row">
          {repo.description ? (
            <Typography>{`${repo.name} ${repo.description}`}</Typography>
          ) : (
            <Typography>{`${repo.name} `}</Typography>
          )}
        </Box>
      </Card>
    );
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
      <UserCard user={user} />
      {console.log(user)}
      <Box display="flex" flexDirection="column">
        {repos.map(renderRepo)}
      </Box>
    </div>
  );
};

export default Searchbar;
