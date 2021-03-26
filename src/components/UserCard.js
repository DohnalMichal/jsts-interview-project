import React from 'react'
import { Card, CardHeader, CardMedia, Box, Avatar } from '@material-ui/core';
import { Component as RepoIcon } from '../icons/repository.svg'
import { repos } from "./Searchbar";

console.log(name);

const UserCard = () => {
  return (
    <Card
      style={{ marginTop: '2em' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center">
        <Avatar
          alt="avatar"
          src="https://avatars.githubusercontent.com/u/26080144?v=4"
          style={{ height: '80px', width: '80px', marginTop: '1em' }} />
        <CardHeader
          title={name}
          style={{ textAlign: 'center' }}
        />

      </Box>
    </Card>
  )
}

export default UserCard
