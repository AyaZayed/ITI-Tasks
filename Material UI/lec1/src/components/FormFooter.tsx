import { AcUnit } from "@mui/icons-material";
import { Button, ButtonGroup, Divider, Link, Typography } from "@mui/material";

export default function FormFooter() {
   return (
      <div className="form-footer">
         <Typography variant="h5" fontSize={24} textAlign={"center"}>
            Actions
         </Typography>
         <ButtonGroup variant="outlined" fullWidth>
            <Button variant="contained">Save</Button>
            <Button
               disabled
               // uppercase
               sx={{ textTransform: "uppercase" }}>
               Reset Form
            </Button>
            <Button color="error">Cancel</Button>
         </ButtonGroup>
         <Divider />
         <div className="support">
            <Typography variant="h5" fontSize={24} textAlign={"center"}>
               Need Help?
            </Typography>
            <Typography variant="subtitle1" fontSize={16} textAlign={"center"}>
               <AcUnit /> Contact support
            </Typography>
         </div>

         <Divider />

         <Typography variant="h5" fontSize={24} textAlign={"center"}>
            Bonus Challenges
         </Typography>

         <ButtonGroup
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ textTransform: "uppercase" }}>
            <Button>Desktop view 1</Button>
            <Button>Desktop view 2</Button>
            <Button>Desktop view 3</Button>
         </ButtonGroup>

         <Button
            fullWidth
            sx={{ textTransform: "uppercase" }}
            loading
            variant="outlined"
            loadingPosition="end">
            Loading Profile...
         </Button>

         <Link href="#" variant="body2" textAlign={"center"} underline="none">
            TERMS AND CONDITIONS
         </Link>
      </div>
   );
}
