import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import LanguageIcon from "@material-ui/icons/Language";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  tableContainer: {
    marginTop: "2em"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const Organistaions = ({ rows }) => {
  const classes = useStyles();
  if (rows[0]) {
    return (
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">
                  <Avatar
                    variant="square"
                    alt="Company avatar"
                    src={row.avatar_url}
                    className={classes.large}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.login}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return <Typography>User does not belong to any organisation</Typography>;
};

export default Organistaions;
