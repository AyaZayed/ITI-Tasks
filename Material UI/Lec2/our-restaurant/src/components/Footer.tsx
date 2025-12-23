import { Box, Typography, Link, Container } from "@mui/material";

export default function Footer() {
   return (
      <Box
         sx={{
            backgroundColor: "#181717ff",
            color: "white",
            py: 3,
            textAlign: "center",
         }}>
         <Container maxWidth="lg">
            <Typography variant="body2" sx={{ mb: 1 }}>
               ©2025 Restaurant. All rights reserved.
            </Typography>
            <Box sx={{ "& > *": { mx: 1 } }}>
               <Link href="#" color="inherit" underline="hover">
                  Facebook
               </Link>
               <Link href="#" color="inherit" underline="hover">
                  Twitter
               </Link>
               <Link href="#" color="inherit" underline="hover">
                  Instagram
               </Link>
            </Box>
         </Container>
      </Box>
   );
}
