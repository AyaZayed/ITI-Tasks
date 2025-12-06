import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// global input props
type GlobalInputProps = {
   label: string;
   value: string;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   onBlur?: () => void;
   error?: boolean;
   helperText?: string;
   variant?: "filled" | "outlined" | "standard";
   type?: "text" | "password" | "email" | string;
   icon?: React.ReactNode;
   multiline?: boolean;
   minRows?: number;
   required?: boolean;
   isTop?: boolean;
};

export default function GlobalInput({
   label,
   value,
   onChange,
   onBlur,
   error,
   helperText = "",
   variant = "filled", // filled | outlined
   type = "text", // text | password | email | others
   icon = null, // pass a component OR null
   multiline = false, // for textarea
   minRows = 4, // for textarea height
   required = false,
   isTop = false,
}: GlobalInputProps) {
   const [showPassword, setShowPassword] = useState(false);

   const isPassword = type === "password";

   return (
      <TextField
         fullWidth
         label={label}
         variant={variant}
         value={value}
         onChange={onChange}
         onBlur={onBlur}
         error={error}
         helperText={helperText}
         required={required}
         type={isPassword && showPassword ? "text" : type}
         multiline={multiline}
         minRows={multiline ? minRows : undefined}
         slotProps={{
            input: {
               startAdornment: icon ? (
                  <InputAdornment position="start">{icon}</InputAdornment>
               ) : null,

               endAdornment: isPassword ? (
                  <InputAdornment position="end">
                     <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                     </IconButton>
                  </InputAdornment>
               ) : null,
            },
         }}
         // Style for label-on-top-of-border (filled variant)
         sx={{
            ...(isTop && {
               "& .MuiInputLabel-root": {
                  backgroundColor: "white",
                  padding: "0 4px",
                  transform: "translate(12px, -10px) scale(0.85)",
               },
            }),
         }}
      />
   );
}
