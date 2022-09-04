import { useState, useEffect } from 'react';

import { MovieItem, Token } from 'services';
import { SessionId } from 'services/session.model';

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

export function useFetchAuth(url : string) {
  const [result, setResult] = useState<Token>();
  
  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, {
        method: "GET"
      }).then(data => data.json()).then(result => setResult(result));
      
    };

    api();
  }, []);
  
  return result?.request_token;
}

export function useFetchAuthSession(url: string, request_token: string | undefined) {
  const [result, setResult] = useState<SessionId>();
  
  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(request_token)
      }).then(data => data.json()).then(result => setResult(result));
      
    };

    api();
  }, []);
  
  return result?.session_id;
}
