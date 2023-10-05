import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'
interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [show, setShow] = useState<boolean>(false)

  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className={classes.post}>
      <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
        {show && <p>More Information ....</p>}
      </Link>
      <button onClick={handleClick}>{show ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}
export default Post
