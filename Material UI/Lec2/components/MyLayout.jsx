import { Box, Divider, Stack } from "@mui/material";
import React from "react";

export default function MyLayout() {
  const boxStyle = {
    border: "1px solid grey",
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    m: 2,
    p: 2,
  };
  return (
    // stack --> flexbox helper component --> uses flexbox
    // manages directions
    // manages spacing
    // handle responsive layouts

    // sx support ? -->
    // spacing (m , p)
    // responsive values
    // breakpoints
    // pseudo-classes
    // nested selectors
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          backgroundColor: "yellow",
        }}
      >
        <Box
          component="section"
          sx={{
            ...boxStyle,
          }}
        ></Box>
        <Box
          component="section"
          sx={{
            ...boxStyle,
          }}
        ></Box>
        <Box
          component="section"
          sx={{
            ...boxStyle,
          }}
        ></Box>
        <Box
          component="section"
          sx={{
            ...boxStyle,
          }}
        ></Box>
        <Box
          component="section"
          sx={{
            ...boxStyle,
          }}
        ></Box>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{
          backgroundColor: "blue",
          margin: "12px",
        }}
      >
        <div>Item 1 </div>
        <div>Item 2 </div>
        <div>Item 3 </div>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row", md: "column", lg: "row" }}
        divider={<Divider flexItem orientation="vertical"></Divider>}
        justifyContent="center"
        sx={{
          backgroundColor: "yellowgreen",
        }}
      >
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Stack>
    </>
  );
}
