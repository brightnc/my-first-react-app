import usePosts from '../hooks/usePosts'
import Post from '../components/Post'
import classes from './Home.module.css'

const Home = () => {
  const { posts, isLoading } = usePosts()

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
