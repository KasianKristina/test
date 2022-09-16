import { useState } from "react"

export const useFetch = <T>() => {
    const [result, setResults] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const get = async (url: string) => {
        setResults(null)
        setError(null)
        setIsLoading(true)

        await fetch(url, {
            method: 'GET'
        }).then((data) => {
            data.json().then((jsonData) => {
                setResults(jsonData.results)
                setIsLoading(false)
            })
        }).catch((e) => {
            setError(e)
        }).finally(() => {
            setIsLoading(false)
        })
    }
    return { result, isLoading, error, get }
}
