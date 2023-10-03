import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'
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
      <p>id: {post.id}</p>
      <p>postedBy: {post.userId}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
      {show && <p>More Information ....</p>}
      <button onClick={handleClick}>{show ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}
export default Post
