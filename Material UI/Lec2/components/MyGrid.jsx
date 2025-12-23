import { Height } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function MyGrid() {
  // const boxStyle = {
  //   border: "1px solid black",
  //   width: "100%",
  //   height: "100px",
  //   backgroundColor: "red",
  // };
  return (
    <div>
      {/* <Grid container spacing={4}>
        <Grid size={8}>
          <div>hello my size is 8</div>
        </Grid>

        <Grid size={4}>
          <div>hello my size is 4</div>
        </Grid>
      </Grid> */}

      {/* <Grid container columns={12}>
        <Grid size={4}>
          <Box component="section" sx={{ ...boxStyle }}></Box>
        </Grid>
        <Grid size={4}>
          <Box component="section" sx={{ ...boxStyle }}></Box>
        </Grid>
        <Grid size={4}>
          <Box component="section" sx={{ ...boxStyle }}></Box>
        </Grid>
        <Grid size={6}>
          <Box component="section" sx={{ ...boxStyle }}></Box>
        </Grid>
        <Grid size={6}>
          <Box component="section" sx={{ ...boxStyle }}></Box>
        </Grid>
      </Grid> */}

      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box
              sx={{
                p: 1,
                textAlign: "center",
                border: "1px dashed grey",
                backgroundColor: "yellowgreen",
              }}
            >
              hello
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box
              sx={{
                p: 1,
                textAlign: "center",
                border: "1px dashed grey",
                backgroundColor: "yellowgreen",
              }}
            >
              hello
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box
              sx={{
                p: 1,
                textAlign: "center",
                border: "1px dashed grey",
                backgroundColor: "yellowgreen",
              }}
            >
              hello
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
