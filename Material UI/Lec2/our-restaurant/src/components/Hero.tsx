import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
   return (
      <Box
         sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            px: 2,
            backgroundImage:
               'url("https://images.unsplash.com/photo-1556742205-e10c9486e506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D)',
         }}>
         <Container maxWidth="md">
            <Typography
               variant="h3"
               component="h1"
               gutterBottom
               sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
               }}>
               Welcome to Our Restaurant
            </Typography>
            <Typography
               variant="h6"
               component="p"
               gutterBottom
               sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
               }}>
               Delicious food served with love
            </Typography>
            <Button
               variant="contained"
               size="large"
               sx={{
                  mt: 3,
                  backgroundColor: "#1976d2",
                  "&:hover": { backgroundColor: "#115293" },
               }}>
               View Menu
            </Button>
         </Container>
      </Box>
   );
}
