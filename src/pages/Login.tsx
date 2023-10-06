import classes from './Login.module.css'

const Login = () => {
  return (
    <form className={classes.loginForm}>
      <label>Username:</label>
      <input type="text" />

      <label>Password:</label>
      <input type="Password" />

      <input type="submit" value="Login" />
    </form>
  )
}

export default Login
