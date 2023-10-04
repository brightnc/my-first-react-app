import { FormEvent, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import usePosts from './hooks/usePosts'

function App() {
  const { posts, isLoading, isPending, createPost } = usePosts()
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await createPost(newTitle, newBody)
    } catch (error) {
      console.error(error)
    }
  }

  const name: string = 'Bright'
  const isLoggedIn: boolean = true

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
