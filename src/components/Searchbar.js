import React from "react";
import TextField from "@material-ui/core/TextField";


const Searchbar = () => {
  return (
    <div style={{ marginTop: 80 }}>
      <TextField
        color="primary"
        id="outlined-basic"
        label="Search Github User"
        variant="outlined"
        style={{ width: 400 }}
      />
    </div>
  );
};

export default Searchbar;
