import React, { useState } from "react";

const TweetComposer: React.FC = () => {
   const [text, setText] = useState<string>("");
   const limit: number = 240;

   const isOverLimit: boolean = text.length > limit;
   const isEmpty: boolean = text.length === 0;

   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
   };

   const handlePost = () => {
      alert(`Posted: ${text}`);
   };

   return (
      <div className="md:max-w-xl md:w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
         <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Compose Tweet
         </h2>

         <textarea
            aria-label="tweet-textarea"
            placeholder="What's happening?"
            value={text}
            rows={5}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all 
          ${
             isOverLimit
                ? "border-red-500 focus:ring-red-200 text-red-600"
                : "border-gray-300 focus:ring-blue-200 text-gray-700"
          }`}
         />

         <div className="flex justify-between items-center mt-3">
            <span
               data-testid="char-counter"
               className={`text-sm font-medium ${
                  isOverLimit ? "text-red-500" : "text-gray-500"
               }`}>
               {text.length} / {limit}
            </span>

            <button
               onClick={handlePost}
               disabled={isEmpty || isOverLimit}
               className={`px-5 py-2 rounded-full font-bold transition-colors 
            ${
               isEmpty || isOverLimit
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
            }`}>
               Tweet
            </button>
         </div>
      </div>
   );
};

export default TweetComposer;
