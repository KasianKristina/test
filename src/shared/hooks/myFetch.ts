import { useState } from 'react'
import { MovieItem } from 'services'

export const useFetch = () => {
  const [result, setResults] = useState<MovieItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const get = async (url: string) => {
    setError(null)
    setIsLoading(true)

    await fetch(url, {
      method: 'GET'
    })
      .then((data) => {
        data.json().then((jsonData) => {
          setResults(jsonData.results)
          setIsLoading(false)
        })
      })
      .catch((e) => {
        setError(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return { result, isLoading, error, get }
}