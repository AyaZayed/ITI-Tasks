export default function MoviesCard({ movie }) {
   return (
      <div className="card w-full rounded-lg outline-1 outline-black/50 p-4 flex flex-col gap-2">
         <div className="flex justify-between">
            <h3 className="text-xl font-bold">{movie.title}</h3>
            <p className="text-nowrap">⭐ {movie.rating}</p>
         </div>
         <p>{movie.year}</p>
         <p>{movie.genre}</p>
         <p className="outline-1 outline-black/30 p-1 px-3 rounded-xl w-fit mt-3">
            {movie.type === "movie" ? "Movie" : "TV Show"}
         </p>
      </div>
   );
}
