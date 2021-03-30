import React, { useState, useEffect } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { TextField, Button, Tabs, Tab } from "@material-ui/core";
import { getRepos, getUserData } from "../api/github-api.ts";
import UserCard from "./UserCard";
import Repositories from "./Repositories";
import Organisations from "./Organisations";

const Searchbar = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const tabs = ["/repositories", "/organisations"];

  useEffect(() => {
    setUser({});
    setRepos([]);
    setOrgs([]);
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser();
    searchRepos();
  };

  const searchUser = () => {
    getUserData(username).then((data) => {
      setUser(data.user);
      setOrgs(data.orgs);
    });
  };
  const searchRepos = () => {
    setLoading(true);
    getRepos(username).then((data) => {
      setLoading(false);
      setRepos(data);
    });
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
      {repos[0] ? (
        <BrowserRouter>
          <Route
            path="/"
            render={({ location }) => (
              <>
                <Tabs value={location.pathname}>
                  <Tab
                    label="Repositories"
                    value="/repositories"
                    component={Link}
                    to={tabs[0]}
                  />
                  <Tab
                    label="Organisations"
                    value="/organisations"
                    component={Link}
                    to={tabs[1]}
                  />
                </Tabs>
                <Switch>
                  <Route
                    path={tabs[0]}
                    render={() => <Repositories rows={repos} />}
                  />
                  <Route
                    path={tabs[1]}
                    render={() => <Organisations rows={orgs} />}
                  />
                </Switch>
              </>
            )}
          />
        </BrowserRouter>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Searchbar;
