import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import classes from './PostDetail.module.css'

const PostDetail = () => {
  const { id } = useParams()
  const { post, isLoading, error } = usePost(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div className={classes.container}>
      {post && (
        <>
          <h1>Title : {post.title}</h1>
          <h2>posted id :{post.id}</h2>
          <h4>posted by user id : {post.userId}</h4>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}

export default PostDetail
