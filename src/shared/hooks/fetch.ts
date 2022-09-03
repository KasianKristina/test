import { useState, useEffect } from 'react';

import  { MovieItem } from 'services/movie.model';

export function useFetchMovies(url : string) {
    const [result, setResult] = useState<MovieItem[]>([]);
    
    useEffect(() => {
      const api = async () => {
        const data = await fetch(url, {
          method: "GET"
        });
        const jsonData = await data.json();
        setResult(jsonData.results);
      };
  
      api();
    }, []);

    return result;
}

