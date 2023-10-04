import axios from 'axios'
import { useEffect, useState } from 'react'
import { CreatePostDTO, PostDTO } from '../types/dto'

const usePosts = () => {
  const [posts, setPosts] = useState<PostDTO[] | null>([])
  const [isPending, setIsPending] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)

  const url = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<PostDTO[]>(url)
        setPosts(res.data)
        setIsLoading(true)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const createPost = async (newTitle: string, newBody: string) => {
    setIsPending(true)
    if (!posts) return

    const data: CreatePostDTO = {
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    }

    try {
      const res = await axios.post<PostDTO>(url, data, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      console.log(res.data)
    } catch (error) {
      throw new Error('Cannot create post !')
    } finally {
      setIsPending(false)
    }
  }

  return { posts, isLoading, isPending, createPost }
}
export default usePosts
