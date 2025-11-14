import User from "@/types/user";
import Image from "next/image";

export default function UserCard({ user }: Readonly<{ user: User }>) {
   return (
      <div className="flex flex-col gap-4">
         <div className="border border-neutral-200 flex justify-center py-6 rounded-xl h-[250px]">
            <Image src={user.avatar} alt={user.name} width={150} height={150} />
         </div>
         <h2 className="font-serif text-fuchsia-600">{user.name}</h2>
         <p className="text-neutral-400">{user.createdAt}</p>
      </div>
   );
}
