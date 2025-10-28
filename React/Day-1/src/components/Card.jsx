export default function Card({ card }) {
   return (
      <div
         className={`card rounded-3xl p-8 flex flex-col gap-6 text-center ${card.bgColor}`}>
         <img src={card.img} alt="chat" className="h-[20vh]" />
         <h3 className="font-bold text-lg">{card.title}</h3>
         <p className="text-justify">{card.text}</p>
      </div>
   );
}
