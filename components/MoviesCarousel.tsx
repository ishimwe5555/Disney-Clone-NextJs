import { Movie } from "@/typings";
import MovieCard from "./MovieCard";

type props = {
    title?: string;
    movies: Movie[];
    isVertical?:boolean;
}
function MoviesCarousel({title, movies, isVertical }: props) {
  return (
    <div className="z-50">
      <h2>{title}</h2>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesCarousel
