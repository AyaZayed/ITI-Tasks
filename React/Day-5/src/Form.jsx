import { useForm } from "react-hook-form";

export default function Form() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   console.log(errors);

   const mySubmit = (data) => {
      console.log("Submission is done", data);
   };

   return (
      <form
         className="outline-1 outline-neutral-200 rounded-lg p-6 w-full md:w-1/2"
         onSubmit={handleSubmit(mySubmit)}>
         <div className="flex gap-4 mb-4">
            <div className="w-full">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName">
                  First Name
               </label>
               <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline-2 outline-neutral-200"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                     required: "This field is required",
                     minLength: {
                        value: 3,
                        message: "Minimum length should be 3",
                     },
                  })}
               />
               {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
               )}
            </div>
            <div className="w-full">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName">
                  Last Name
               </label>
               <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline-2 outline-neutral-200"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                     required: "This field is required",
                     minLength: {
                        value: 3,
                        message: "Minimum length should be 3",
                     },
                  })}
               />
               {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
               )}
            </div>
         </div>

         <div className="w-full mb-4">
            <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="pass">
               Password
            </label>
            <input
               className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline-2 outline-neutral-200"
               id="pass"
               type="password"
               placeholder="Password"
               {...register("password", {
                  required: "This field is required",
                  minLength: {
                     value: 8,
                     message: "Minimum length should be 8",
                  },
                  pattern: {
                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                     message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
               })}
            />
            {errors.password && (
               <p className="text-red-500">{errors.password.message}</p>
            )}
         </div>

         <div className="w-full">
            <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="passConfirm">
               Confirm Password
            </label>
            <input
               className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline-2 outline-neutral-200"
               id="passConfirm"
               type="password"
               placeholder="Confirm Password"
               {...register("passConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                     value === watch("password") || "Passwords do not match",
               })}
            />
            {errors.passConfirm && (
               <p className="text-red-500">{errors.passConfirm.message}</p>
            )}
         </div>

         <button
            className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
            type="submit">
            Submit
         </button>
      </form>
   );
}
