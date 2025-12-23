import { Button, ButtonGroup, Divider, IconButton } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import React from "react";

export default function MyButton() {
  return (
    <div>
      <Button>submit</Button>
      <Button fullWidth>submit</Button>

      <Button variant="text">submit</Button>
      <Button variant="outlined">submit</Button>
      <Button variant="contained">submit</Button>

      {/* Divider ==> hr  */}
      <Divider />

      {/* =================================================>   */}

      <Button variant="contained" size="large">
        submit
      </Button>
      <Button variant="contained" size="medium">
        submit
      </Button>
      <Button variant="contained" size="small">
        submit
      </Button>
      <Divider />
      {/* =================================================>   */}

      <Button variant="outlined" color="warning">
        submit
      </Button>
      <Button variant="outlined" color="error">
        submit
      </Button>
      <Button variant="outlined" color="info">
        submit
      </Button>
      <Button variant="outlined" color="secondary">
        submit
      </Button>
      {/* =================================================>   */}

      <Divider />

      {/* <button>
        <span>submit</span> <span>icon</span>
      </button> */}

      <Button variant="contained" startIcon={<AcUnitIcon />}>
        submit
      </Button>

      <Button variant="contained" endIcon={<AcUnitIcon />}>
        submit
      </Button>

      <IconButton>
        <AcUnitIcon />
      </IconButton>
      {/* =================================================>   */}

      <Divider />
      {/* <a href=""><button>submit</button></a>
      <button><a href="">submit</a></button> */}

      <Button component="a" variant="outlined" href="">
        submit
      </Button>
      {/* =================================================>   */}

      <Divider />

      <Button disabled variant="contained">
        submit
      </Button>
      <Button disableElevation variant="contained">
        submit
      </Button>
      <Button disableRipple variant="contained">
        submit
      </Button>
      {/* =================================================>   */}

      <Divider />

      <Button loading variant="outlined">
        Submit
      </Button>

      <Button loading variant="outlined" loadingPosition="start">
        Submit
      </Button>
      <Button loading variant="outlined" loadingPosition="end">
        Submit
      </Button>
      {/* =================================================>   */}

      <Divider />

      <ButtonGroup variant="text">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <Divider />

      <ButtonGroup color="secondary">
        <Button color="error" variant="contained">
          1
        </Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>

      <Divider />

      <ButtonGroup color="secondary" orientation="vertical">
        <Button color="error" variant="contained">
          1
        </Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <Divider />

      <Button variant="contained" startIcon={<AcUnitIcon />}>
        submit
      </Button>

      <Button variant="contained" endIcon={<AcUnitIcon />}>
        submit
      </Button>

      <IconButton>
        <AcUnitIcon />
      </IconButton>
    </div>
  );
}
