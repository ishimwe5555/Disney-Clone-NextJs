import { notFound } from "next/navigation"

type Props = {
    params: {
        term: string;
    };
};

function SearchPage({params: {term}}:Props) {
    if (!term) notFound();

    const termToUse = decodeURI(term)
    
    //API call to get the movies
    //API to get popular movies

    return  <div>Welcome to the Search Page: {termToUse}</div>
}

export default SearchPage
