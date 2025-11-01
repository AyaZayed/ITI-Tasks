export default function FilterMovies({ movies, setMovies }) {
   const handleFilter = (e) => {
      const filter = e.target.value;
      if (filter === "all") {
         setMovies(movies);
         return;
      }
      const filteredMovies = movies.filter((movie) => movie.type === filter);
      setMovies(filteredMovies);
   };
   return (
      <select
         onChange={handleFilter}
         className="outline-1 outline-black/50 rounded-lg p-2 px-4">
         <option value="all">All</option>
         <option value="movie">Movies</option>
         <option value="tvshow">TV Shows</option>
      </select>
   );
}
