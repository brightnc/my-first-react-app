import { useEffect, useState } from 'react'
import { PostDTO } from '../types/dto'
import axios from 'axios'

const usePost = (id: string) => {
  const [post, setPost] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const url = 'https://jsonplaceholder.typicode.com/posts/'

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO>(url + id)
        setPost(res.data)
      } catch (error) {
        setError('Cannot get post id : ' + id)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { post, isLoading, error }
}
export default usePost
