import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  greetingMsg?: string
  isLoggedIn: boolean
}
const Greeting = ({ name, greetingMsg = 'Welcome', isLoggedIn }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>{greetingMsg}</h3>
      <p>{isLoggedIn ? name : 'Unknown'}</p>
    </div>
  )
}
export default Greeting
