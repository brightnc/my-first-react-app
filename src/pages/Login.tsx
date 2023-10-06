import { FormEvent, useState } from 'react'
import classes from './Login.module.css'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />

      <label>Password:</label>
      <input type="Password" onChange={(e) => setPassword(e.target.value)} />

      <input type="submit" value="Login" />
    </form>
  )
}

export default Login
