import { useEffect, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { PostDTO } from './types/dto'
import { postsData } from './data'

function App() {
  const getPosts = (): Promise<PostDTO[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(postsData)
      }, 2 * 1000)
    })
  }

  const name: string = 'Bright'
  const isLoggedIn: boolean = true
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<PostDTO[]>([])
  useEffect(() => {
    getPosts().then((data) => {
      setLoading(true)
      setPosts(data)
    })
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Greeting name={name} isLoggedIn={isLoggedIn} />
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
