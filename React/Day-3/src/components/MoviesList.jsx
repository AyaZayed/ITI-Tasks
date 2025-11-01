import { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import FilterMovies from "./FilterMovies";

export default function MoviesList() {
   const [allMovies, setAllMovies] = useState([]);
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetch("/entertainment.json")
         .then((res) => res.json())
         .then((data) => {
            setAllMovies(data);
            setMovies(data);
         });
   }, []);

   return (
      <section className="flex flex-col justify-center items-center gap-10 p-10">
         <h2 className="font-bold text-3xl uppercase">Movies</h2>
         <FilterMovies movies={allMovies} setMovies={setMovies} />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {movies.map((movie) => (
               <MoviesCard key={movie.id} movie={movie} />
            ))}
         </div>
      </section>
   );
}
