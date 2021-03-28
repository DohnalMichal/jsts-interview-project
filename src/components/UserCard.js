import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  Box,
  Avatar,
  Link
} from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const UserCard = ({ user }) => {
  console.log(user);
  if (user.id) {
    return (
      <Card style={{ marginTop: "2em", paddingBottom: "2em" }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt="avatar"
            src={user.avatar_url}
            style={{ height: "80px", width: "80px", marginTop: "1em" }}
          />
          <CardHeader
            title={
              <Link href={user.html_url} style={{ textDecoration: "none" }}>
                {user.name}
              </Link>
            }
            subheader={user.login}
            style={{ textAlign: "center" }}
          />
          <Typography>{user.bio}</Typography>
          <Typography style={{ display: "flex" }}>
            <BookIcon style={{ marginRight: 5, marginLeft: 5 }} />
            {user.public_repos}
            <PeopleAltIcon style={{ marginRight: 5, marginLeft: 5 }} />
            {user.followers}
          </Typography>
          <Typography style={{ display: "flex" }}></Typography>
        </Box>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

export default UserCard;
