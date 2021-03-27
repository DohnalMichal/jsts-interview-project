import React from "react";
import { Card, CardHeader, CardMedia, Box, Avatar } from "@material-ui/core";
// import { Component as RepoIcon } from '../icons/repository.svg'
import { user } from "./Searchbar";
// console.log(name);

const UserCard = ({ user }) => {
  console.log(user);
  if (user.login) {
    return (
      <Card
        style={{ marginTop: '2em' }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center">
          <Avatar
            alt="avatar"
            src={user.avatar_url}
            style={{ height: '80px', width: '80px', marginTop: '1em' }} />
          <CardHeader
            title={user.login}
            style={{ textAlign: 'center' }}
          />
        </Box>
      </Card>
    );
  }
  else {
    return (<div></div>)
  }

};

export default UserCard;
