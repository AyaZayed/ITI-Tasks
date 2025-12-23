import { Button, Divider, Slider, TextField, Typography } from "@mui/material";
import React from "react";

export default function MyCustome() {
  return (
    <div>
      <Button
        variant="contained"
        // disabled
        // disableElevation
        sx={{
          backgroundColor: "red",
          color: "black",
          borderRadius: "4px",

          "&:hover": {
            backgroundColor: "black",
            color: "red",
          },
          "&.Mui-disabled": {
            color: "red",
          },
        }}
      >
        submit
      </Button>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <TextField
        label="username"
        InputLabelProps={{ style: { color: "blue" } }}
        InputProps={{ style: { backgroundColor: "gray" } }}
        sx={{
          mt: 5,
          "& fieldset": {
            borderColor: "red",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "yellow",
            },
            "&.Mui-focused fieldset": {
              borderColor: "green",
            },
          },
        }}
      ></TextField>
    </div>
  );
}
