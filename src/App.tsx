import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { CreatePostDTO, PostDTO } from './types/dto'
import axios from 'axios'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<PostDTO[] | null>([])
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const [isPending, setIsPending] = useState<boolean>(false)

  const name: string = 'Bright'
  const isLoggedIn: boolean = true
  const url = 'https://jsonplaceholder.typicode.com/posts'

  // const getPosts = (): Promise<PostDTO[]> => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(postsData)
  //     }, 1 * 1000)
  //   })
  // }

  // useEffect(() => {
  //   getPosts().then((data) => {
  //     setLoading(true)
  //     setPosts(data)
  //   })
  // }, [])

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
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
      console.error(error)
    } finally {
      setIsPending(false)
    }

    setNewTitle('')
    setNewBody('')
  }

  const handleNewTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)
  const handleNewBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewBody(e.target.value)

  return (
    <div className="App">
      <Navbar />
      <Greeting name={name} isLoggedIn={isLoggedIn} />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} required onChange={handleNewTitleChange} />
        <label>Body</label>
        <input type="text" value={newBody} required onChange={handleNewBodyChange} />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Pending...' : 'Submit'}
        </button>
      </form>
      <div className="feed-container">
        {isLoading && posts
          ? posts.map((post) => {
              return <Post key={post.id} post={post} />
            })
          : 'Loading...'}
      </div>
    </div>
  )
}

export default App
