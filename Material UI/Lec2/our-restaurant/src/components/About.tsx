import { Box, Typography, Container, Grid } from "@mui/material";

export default function About() {
   return (
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
         <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
               <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                     sx={{
                        width: "100%",
                        height: { xs: 200, md: 300 },
                        backgroundImage:
                           'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 2,
                     }}
                  />
               </Grid>
               <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                     About Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                     We are a family-owned restaurant dedicated to serving
                     delicious, high-quality meals made from fresh, locally
                     sourced ingredients. Our mission is to provide an
                     unforgettable dining experience for every guest. We believe
                     in creating a warm and welcoming atmosphere where friends
                     and family can gather and enjoy great food.
                  </Typography>
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
}
