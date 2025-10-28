import Card from "./Card";

export default function Cards() {
   const cards = [
      {
         id: 1,
         img: "chat.svg",
         title: "24/7 Expert-Backed Support",
         text: "Real-time, science-backed advice tailored to your baby's needs and your parenting style—available whenever you need it (even at 3am).",
         bgColor: "bg-lavender",
      },
      {
         id: 2,
         img: "tracking.svg",
         title: "Smart, Predictive Tracking",
         text: "Riley doesn't just store your data, it learns and grows with you. Track sleep, feed, diapers, development and more to stay on top of what's next for your baby.",
         bgColor: "bg-orange",
      },
      {
         id: 3,
         img: "sparks.svg",
         title: "Tips Tailored Just for You",
         text: "No more endless Googling. Riley gives you helpful tips made just for your family—so you can parent with a little more ease (and a lot less guesswork).",
         bgColor: "bg-lavender",
      },
   ];
   return (
      <section className="p-12 bg-peach">
         <div className="bg-white flex flex-col items-center justify-center gap-6 rounded-3xl py-20 px-10">
            <p>Parenting is hard. Riley makes it easier.</p>
            <h2 className="text-[40px] ">
               One App for All Your Parenting Needs
            </h2>
            <div className="cards grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
               {cards.map((card) => (
                  <Card card={card} key={card.id}></Card>
               ))}
            </div>
            <a href="#" className="primary-btn">
               Get Started For Free
            </a>
         </div>
      </section>
   );
}
