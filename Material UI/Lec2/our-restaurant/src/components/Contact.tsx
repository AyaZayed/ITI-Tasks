import { Box, Typography, Container, TextField, Button } from "@mui/material";

export default function Contact() {
   return (
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
         <Container maxWidth="md">
            <Typography
               variant="h4"
               component="h2"
               align="center"
               gutterBottom
               sx={{ mb: 6 }}>
               Contact Us
            </Typography>
            <Box
               component="form"
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
               }}
               noValidate
               autoComplete="off">
               <TextField label="Name" variant="outlined" fullWidth />
               <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
               />
               <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
               />
               <Button
                  variant="contained"
                  size="large"
                  sx={{
                     backgroundColor: "#1976d2",
                     "&:hover": { backgroundColor: "#115293" },
                  }}>
                  Submit
               </Button>
            </Box>
         </Container>
      </Box>
   );
}
