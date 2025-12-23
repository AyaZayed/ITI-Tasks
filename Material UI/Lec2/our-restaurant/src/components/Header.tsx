import { useState } from "react";
import {
   AppBar,
   Toolbar,
   Button,
   Box,
   Typography,
   IconButton,
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   useMediaQuery,
   useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
   const [mobileOpen, setMobileOpen] = useState(false);
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Adjust breakpoint as needed

   const menuItems = ["Home", "Menu", "About", "Contact"];

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
         <Typography variant="h6" sx={{ my: 2 }}>
            Restaurant
         </Typography>
         <List>
            {menuItems.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                     <ListItemText primary={item} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   return (
      <>
         <AppBar position="static" sx={{ backgroundColor: "#181717ff" }}>
            {" "}
            {/* Set background to black */}
            <Toolbar sx={{ justifyContent: "space-between" }}>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Restaurant
               </Typography>

               {!isMobile && (
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                     {menuItems.map((item) => (
                        <Button key={item} sx={{ color: "#fff" }}>
                           {item}
                        </Button>
                     ))}
                  </Box>
               )}

               {isMobile && (
                  <IconButton
                     color="inherit"
                     aria-label="open drawer"
                     edge="end"
                     onClick={handleDrawerToggle}
                     sx={{ ml: 2 }}>
                     <MenuIcon />
                  </IconButton>
               )}
            </Toolbar>
         </AppBar>

         <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
               keepMounted: true, // Better performance on mobile.
            }}
            sx={{
               "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}>
            {drawer}
         </Drawer>
      </>
   );
}
