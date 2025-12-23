import {
   Box,
   Typography,
   Container,
   Card,
   CardContent,
   CardMedia,
   Grid,
} from "@mui/material";

const menuItems = [
   {
      name: "Grilled Salmon",
      description: "Freshly grilled salmon with herbs.",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D",
   },
   {
      name: "Pasta Carbonara",
      description: "Creamy pasta with bacon and cheese.",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGElMjBjYXJib25hcmF8ZW58MHx8MHx8fDA%3D",
   },
   {
      name: "Cheesecake",
      description: "Classic New York-style cheesecake.",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
   },
];

export default function Menu() {
   return (
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
         <Container maxWidth="lg">
            <Typography
               variant="h4"
               component="h2"
               align="center"
               gutterBottom
               sx={{ mb: 6 }}>
               Our Menu
            </Typography>
            <Grid container spacing={4} justifyContent="center">
               {menuItems.map((item, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={index}>
                     <Card
                        sx={{
                           height: "100%",
                           display: "flex",
                           flexDirection: "column",
                        }}>
                        <CardMedia
                           component="img"
                           height="200"
                           image={item.image}
                           alt={item.name}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                           <Typography gutterBottom variant="h5" component="h3">
                              {item.name}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              {item.description}
                           </Typography>
                           <Typography
                              variant="h6"
                              color="primary"
                              sx={{ mt: 2 }}>
                              {item.price}
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </Box>
   );
}
