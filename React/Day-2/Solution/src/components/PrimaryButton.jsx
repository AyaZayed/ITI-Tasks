export default function PrimaryButton({
   href = "#",
   children,
   color,
   className = "",
}) {
   console.log(color);
   return (
      <a
         href={href}
         className={`bg-${color} w-fit text-white py-2 px-6 hover:bg-white hover:text-${color} hover:outline-1 outline-${color} transition-all duration-300 cursor-pointer ${className}`}>
         {children}
      </a>
   );
}
