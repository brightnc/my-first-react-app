import usePosts from '../hooks/usePosts'
import Post from '../components/Post'
import classes from './Home.module.css'
import { useAuth } from '../providers/AuthProvider'

const Home = () => {
  const { posts, isLoading } = usePosts()

  const { isLoggedIn } = useAuth()
  console.log(isLoggedIn)

  return (
    <div className={classes.container}>
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
