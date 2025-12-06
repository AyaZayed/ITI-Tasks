import { Divider, Typography } from "@mui/material";

export default function FormHeader() {
   return (
      <div className="form-header">
         <Typography
            variant="h1"
            color="secondary"
            fontSize={60}
            textAlign={"center"}>
            User Profile
         </Typography>
         <Typography variant="h2" fontSize={32} textAlign={"center"}>
            Complete your profile information
         </Typography>
         <Typography variant="subtitle1" fontSize={16} textAlign={"center"}>
            Required fields are marked with *
         </Typography>
         <Divider />
      </div>
   );
}
