import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Input() {
  return (
    <Box >
      <TextField
        sx={{ mt: "1rem" }}
        fullWidth
        id="standard-basic"
        label="create a new post..."
        variant="standard"
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="standard-basic"
        label="upload image"
        variant="standard"
      />
      <Button  variant="outlined"  endIcon={<SendIcon />}>Submit</Button>
    </Box>
  );
}

export default Input;
