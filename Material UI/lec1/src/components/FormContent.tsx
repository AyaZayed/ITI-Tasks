import { Divider, Typography } from "@mui/material";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import BioInput from "./BioInput";

export default function FormContent() {
   return (
      <div className="form-content">
         <Typography variant="h3" fontSize={28}>
            Personal Information
         </Typography>
         <NameInput />
         <EmailInput />
         <PasswordInput />
         <Divider />
         <Typography variant="h4" fontSize={28}>
            Optional Information
         </Typography>
         <BioInput />
      </div>
   );
}
