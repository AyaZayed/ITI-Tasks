import { useState } from "react";
import GlobalInput from "./GlobalInput";

export default function EmailInput() {
   const [email, setEmail] = useState("");
   const [emailError, setEmailError] = useState(false);
   const [emailHelper, setEmailHelper] = useState("");

   const validateEmail = () => {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
         setEmailError(true);
         setEmailHelper("Enter a valid email");
      } else {
         setEmailError(false);
         setEmailHelper("");
      }
   };

   return (
      <GlobalInput
         label="Email Address"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         onBlur={validateEmail}
         error={emailError}
         helperText={emailHelper}
         variant="filled"
         type="email"
         required
      />
   );
}
