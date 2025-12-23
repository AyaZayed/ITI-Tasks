import { Divider, InputAdornment, TextField } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import React from "react";

export default function MyTextField() {
  return (
    <div>
      <TextField label="outlined" variant="outlined"></TextField>
      <TextField label="filled" variant="filled"></TextField>
      <TextField label="standard" variant="standard"></TextField>
      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <div>
        <TextField label="name" variant="outlined"></TextField>
        <Divider />
        <TextField label="Email" variant="outlined"></TextField>
      </div>

      <Divider />

      <TextField
        defaultValue="enter your name"
        variant="outlined"
        label="name"
      ></TextField>
      <TextField helperText="incorrect entry" error></TextField>

      <Divider />

      <TextField
        label="Email"
        variant="filled"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AttachEmailIcon />
              </InputAdornment>
            ),
          },
        }}
      ></TextField>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <div>
        <TextField
          label="name"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AcUnitIcon />
                </InputAdornment>
              ),
            },
          }}
        ></TextField>

        <Divider></Divider>

        <TextField
          label="Email"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AttachEmailIcon />
                </InputAdornment>
              ),
            },
          }}
        ></TextField>
      </div>
    </div>
  );
}
