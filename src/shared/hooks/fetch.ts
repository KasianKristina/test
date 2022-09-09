import { useState } from 'react';

import { MovieItem } from 'services';

export const useFetchMovies = () => {
    const [movies, setMovies] = useState<MovieItem[]>([]);
    
    const handleFetchMovies = async (url : string) => {
      await fetch(url, {
        method: 'GET',
      }).then((data) => {
        data.json().then((jsonData) => {
          setMovies(jsonData.results);
        })
      })  
    };
  return {movies, handleFetchMovies};
}

// export const useFetchSearchMovies = (url : string) => {
//   const [movies, setMovies] = useState<MovieItem[]>([]);
  
//   fetch(url, {
//       method: 'GET',
//     }).then((data) => {
//       data.json().then((jsonData) => {
//         setMovies(jsonData.results);
//       })
//     })  
// return movies;
// }
