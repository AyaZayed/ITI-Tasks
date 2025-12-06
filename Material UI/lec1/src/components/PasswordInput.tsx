import { useState } from "react";
import GlobalInput from "./GlobalInput";

export default function PasswordInput() {
   const [password, setPassword] = useState("");
   const [pwdError, setPwdError] = useState(false);
   const [pwdHelper, setPwdHelper] = useState("");

   const validatePassword = () => {
      if (password.length < 6) {
         setPwdError(true);
         setPwdHelper("Password must be at least 6 characters");
      } else {
         setPwdError(false);
         setPwdHelper("");
      }
   };

   return (
      <GlobalInput
         label="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         onBlur={validatePassword}
         error={pwdError}
         helperText={pwdHelper}
         variant="standard"
         type="password"
      />
   );
}
