import { SearchResults } from "@/typings";

async function fetchFromTMDB(url: URL, cacheTime?: number){
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_API}`
        },
        next:{
            revalidate: cacheTime|| 60 * 60 * 24, //24 hours default
        }
      };


    const response = await fetch(url.toString(), options);
    const data =   (await response.json()) as SearchResults;

    return data;
}

export async function getUpcomingMovies() {
    const url = new URL("https://api.themoviedb.org/3/movies/upcoming");
    const data = fetchFromTMDB(url);

    return (await data).results
}   

export async function getTopRatedMovies() {
    const url = new URL("https://api.themoviedb.org/3/movies/top_rated");
    const data = fetchFromTMDB(url);

    return (await data).results
}   

export async function getPopularMovies() {
    const url = new URL("https://api.themoviedb.org/3/movies/popular");
    const data = fetchFromTMDB(url);

    return (await data).results
}   

export async function getDiscoverMovies(id?:string, keywords?:string) {
    const url = new URL("https://api.themoviedb.org/3/discover/movies");

    keywords && url.searchParams.set("with_keywords", keywords);
    id && url.searchParams.set("with_genres", id);
   
    const data = fetchFromTMDB(url);

    return (await data).results
}   