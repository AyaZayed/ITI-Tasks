import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import BlogPost from "./BlogPost";

export default function Blog() {
   const posts = [
      {
         id: 1,
         title: "look even slightly believable if you are",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
         img: b1,
      },
      {
         id: 2,
         title: "anything embarrasing hidden in the middle",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
         img: b2,
      },
      {
         id: 3,
         title: "molestiae consequatur vel illum qui dolorem",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
         img: b3,
      },
   ];
   return (
      <section className="p-10 flex flex-col items-center gap-10">
         <h2 className="text-2xl uppercase font-bold">latest blog</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
               <BlogPost key={post.id} post={post} />
            ))}
         </div>
      </section>
   );
}
