import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { PostDTO } from './types/dto'
import { postsData } from './data'

function App() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<PostDTO[]>([])
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')

  const name: string = 'Bright'
  const isLoggedIn: boolean = true

  const getPosts = (): Promise<PostDTO[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(postsData)
      }, 2 * 1000)
    })
  }

  useEffect(() => {
    getPosts().then((data) => {
      setLoading(true)
      setPosts(data)
    })
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const currentPosts = [...posts]
    currentPosts.push({
      id: Math.floor(Math.random() * 1000),
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    })
    setPosts(currentPosts)

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
        <button type="submit">submit</button>
      </form>
      <div className="feed-container">
        {loading
          ? posts.map((post) => {
              return <Post key={post.id} post={post} />
            })
          : 'Loading...'}
      </div>
    </div>
  )
}

export default App
