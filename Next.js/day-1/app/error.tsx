"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
   error,
}: {
   error: Error & { digest?: string };
}) {
   useEffect(() => {
      console.error(error);
   }, [error]);

   const reset = () => {
      window.location.reload();
   };

   return (
      <div>
         <h2>Something went wrong!</h2>
         <button
            onClick={() => reset()}
            className="border border-fuchsia-600 text-fuchsia-600 rounded-lg py-2 px-4 cursor-pointer">
            Try again
         </button>
      </div>
   );
}
