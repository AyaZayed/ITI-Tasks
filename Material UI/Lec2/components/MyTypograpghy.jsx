import React from "react";
import Typography from "@mui/material/Typography";

export default function MyTypograpghy() {
  return (
    <div>
        {/* 
        component ==> element type
        variant ==> style  */}
      <Typography component="h1" variant="h1">hello</Typography>
      <Typography variant="h2" gutterBottom align="center" color="secondary">hello</Typography>
      <Typography variant="h3">hello</Typography>
      <Typography variant="h4">hello</Typography>
      <Typography variant="h5">hello</Typography>
      <Typography variant="h6">hello</Typography>

      {/* 
      must be = a = to be anchor tag
      href ==> link  */}
      <Typography component="a" href="" variant="button">hello</Typography>
    
      <Typography component="span">hello</Typography>
    
      {/* API ==> to show all  */}
    </div>
  );
}
