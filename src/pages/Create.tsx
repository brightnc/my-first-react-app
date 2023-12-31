import { FormEvent, useState } from 'react'
import usePosts from '../hooks/usePosts'
import classes from './Create.module.css'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const { isPending, createPost } = usePosts()
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')

  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await createPost(newTitle, newBody)

      setNewBody('')
      setNewTitle('')
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  const handleNewTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)
  const handleNewBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewBody(e.target.value)
  return (
    <div>
      <form className={classes.postForm} onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} required onChange={handleNewTitleChange} />
        <label>Body</label>
        <input type="text" value={newBody} required onChange={handleNewBodyChange} />
        <button className={isPending ? classes.formBtnInactive : classes.formBtn} type="submit" disabled={isPending}>
          {isPending ? 'Pending...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
export default Create
