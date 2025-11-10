import UserCard from "@/components/users/UserCard";
import User from "@/types/user";

export const revalidate = 5;

async function getAllUsers() {
   const res = await fetch("https://6911e16052a60f10c81fa83a.mockapi.io/users");

   const users: User[] = await res.json();
   return users;
}

export default async function UsersPage() {
   const users = await getAllUsers();
   return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {users.map((user) => (
            <UserCard key={user.id} user={user} />
         ))}
      </section>
   );
}
