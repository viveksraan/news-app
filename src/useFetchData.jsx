import { useEffect, useState } from 'react'

const useFetchData = (fetchUrl) => {
  // const [fetchUrl, setFetchUrl] = useState(fetchUrl)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl)
        if (!response.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const data = await response.json()
        setData(data)
      } catch {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])
  return { isLoading, isError, data }
}
export default useFetchData
