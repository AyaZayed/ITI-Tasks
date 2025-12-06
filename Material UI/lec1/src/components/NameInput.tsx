import { useState } from "react";
import GlobalInput from "./GlobalInput";
import { AcUnit } from "@mui/icons-material";

export default function NameInput() {
   const [name, setName] = useState("");
   const [nameError, setNameError] = useState(false);
   const [nameHelper, setNameHelper] = useState("");

   const validateName = () => {
      if (!name.trim()) {
         setNameError(true);
         setNameHelper("Enter your full name");
      } else {
         setNameError(false);
         setNameHelper("");
      }
   };

   return (
      <GlobalInput
         label="Full Name*"
         value={name}
         onChange={(e) => setName(e.target.value)}
         onBlur={validateName}
         error={nameError}
         helperText={nameHelper}
         variant="outlined"
         isTop={true}
         icon={<AcUnit />}
         required
      />
   );
}
