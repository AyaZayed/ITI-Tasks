import PrimaryButton from "./PrimaryButton";

export default function BlogPost({ post }) {
   return (
      <div className="flex flex-col gap-4 shadow-xl">
         <img src={post.img} alt={post.title} className="w-full h-[30vh]" />
         <div className="p-6 py-4 pb-5 flex flex-col gap-3 items-between justify-between">
            <div className="content min-h-[100px]">
               <h3 className="font-bold min-h-[50px]">{post.title}</h3>
               <p className="text-gray">{post.desc}</p>
            </div>
            <PrimaryButton color="blue" className="capitalize">
               read more
            </PrimaryButton>
         </div>
      </div>
   );
}
