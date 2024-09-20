import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
     <h1>Let's build Disney</h1>
     {/* Carroussel BAnner wrapper*/}

     <div className="flex flex-col space-y-2 xl:-mt-48">
           <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
           <MoviesCarousel movies={topRatedMovies} title="Upcoming" />
           <MoviesCarousel movies={popularMovies} title="Upcoming" />

     </div>
    </main>
  );
}
