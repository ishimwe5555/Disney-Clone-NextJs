export type Genre = {
    id: number;
    name: String;
}

export type Genres = {
    genres: Genre[];
}

export type SearchResults = {
    page: number;
    results: Movie[];
    total_pages:number;
    total_results:number;
}

export type Movie = {
    adult: number;
    backdrop_path: String;
    genre_ids: number[];
    id:number;
    original_language:String;
    original_title:String;
    overview:string;
    popularity:number;
    poster_path?:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}