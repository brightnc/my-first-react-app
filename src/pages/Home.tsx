import { FormEvent, useState } from 'react'
import usePosts from '../hooks/usePosts'
import Post from '../components/Post'
import classes from './Home.module.css'

const Home = () => {
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

  const handleNewTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)
  const handleNewBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewBody(e.target.value)

  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} required onChange={handleNewTitleChange} />
        <label>Body</label>
        <input type="text" value={newBody} required onChange={handleNewBodyChange} />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Pending...' : 'Submit'}
        </button>
      </form>
      <div className={classes.feedContainer}>
        {isLoading && posts
          ? posts.map((post) => {
              return <Post key={post.id} post={post} />
            })
          : 'Loading...'}
      </div>
    </div>
  )
}

export default Home
