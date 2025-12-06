import { useState } from "react";
import GlobalInput from "./GlobalInput";

export default function BioInput() {
   const [bio, setBio] = useState("");
   return (
      <GlobalInput
         label="Bio"
         value={bio}
         onChange={(e) => setBio(e.target.value)}
         multiline
         minRows={5}
         variant="outlined"
         helperText="Tell us about yourself (optional)"
      />
   );
}
